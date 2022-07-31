/**
 * # UpscalerJS class
 * 
 * Instantiate an Upscaler with:
 * 
 * ```typescript
 * import Upscaler from 'upscaler';
 * const upscaler = new Upscaler();
 * upscaler.upscale(img).then(src => {
 *   // display the src
 * });
 * ```
 *
 * @module UpscalerJS
 */
import { ESRGANSlim, } from './dependencies.generated';
import type {
  UpscalerOptions,
  UpscaleArgs,
  WarmupSizes,
  ResultFormat,
  Progress,
  UpscaleResponse,
  ModelPackage,
} from './types';
import { loadModel, } from './loadModel.generated';

import { warmup, } from './warmup';
import { cancellableUpscale, } from './upscale';
import type { GetImageAsTensorInput, } from './image.generated';
import type { ModelDefinitionObjectOrFn, } from '@upscalerjs/core';
import { getModel, } from './utils';

// TODO: Why do we need to explicitly cast this to ModelDefinition?
// For some reason, TS is picking this up as *any* even though in the editor
// it's defined as ModelDefinition
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const DEFAULT_MODEL: ModelDefinitionObjectOrFn = ESRGANSlim;

export class Upscaler {
  /**
   * @hidden
   */
  _opts: UpscalerOptions;
  /**
   * @hidden
   */
  _model: Promise<ModelPackage>;
  /**
   * @hidden
   */
  #abortController = new AbortController();

  /**
   * Constructor
   */
  constructor(opts: UpscalerOptions = {}) {
    this._opts = {
      ...opts,
    };
    this._model = loadModel(getModel(this._opts.model || DEFAULT_MODEL));
    void warmup(this._model, this._opts.warmupSizes || []);
  }

  dispose = async (): Promise<void> => {
    const { model, } = await this._model;
    model.dispose();
  };

  getModel = (): Promise<ModelPackage> => this._model;
  warmup = async (warmupSizes: WarmupSizes[]): Promise<void> => {
    await warmup(this._model, warmupSizes);
  };

  /**
   * Upscales a given image.
   *
   * @param image the image to upscale.
   * @param options a set of upscaling arguments
   * @returns an upscaled image
   */
  upscale = async<P extends Progress<O, PO>, O extends ResultFormat = 'src', PO extends ResultFormat = undefined>(
    image: GetImageAsTensorInput,
    options: UpscaleArgs<P, O, PO> = {},
  ): Promise<UpscaleResponse<O>> => {
    const { model, modelDefinition, } = await this._model;
    return cancellableUpscale(image, options, {
      model,
      modelDefinition,
      signal: this.#abortController.signal,
    });
  };

  abort = (): void => {
    this.#abortController.abort();
    this.#abortController = new AbortController();
  };
}

export default Upscaler;
