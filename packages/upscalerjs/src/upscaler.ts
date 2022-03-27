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
import { tf, } from './dependencies.generated';
import {
  IUpscalerOptions,
  UpscaleArgs,
  WarmupSizes,
  IModelDefinition,
  ResultFormat,
  Progress,
} from './types';
import loadModel, { getModelDefinitions, } from './loadModel';
import warmup from './warmup';
import { cancellableUpscale, } from './upscale';
import type { GetImageAsTensorInput, } from './image.generated';

export class Upscaler {
  /**
   * @hidden
   */
  _opts: IUpscalerOptions;
  /**
   * @hidden
   */
  _model: Promise<{
    model: tf.LayersModel;
    modelDefinition: IModelDefinition;
  }>;
  /**
   * @hidden
   */
  #abortController = new AbortController();

  /**
   * Constructor
   */
  constructor(opts: IUpscalerOptions = {}) {
    this._opts = {
      ...opts,
    };
    this._model = loadModel(this._opts);
    void warmup(this._model, this._opts.warmupSizes || []);
  }

  dispose = async () => {
    const { model, } = await this._model;
    model.dispose();
  };

  getModel = () => this._model;
  warmup = async (warmupSizes: WarmupSizes[]) => {
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
  ) => {
    const { model, modelDefinition, } = await this._model;
    return cancellableUpscale(image, options, {
      model,
      modelDefinition,
      signal: this.#abortController.signal,
    });
  };

  getModelDefinitions = async () => {
    return await getModelDefinitions();
  };

  abort = () => {
    this.#abortController.abort();
    this.#abortController = new AbortController();
  };
}

export default Upscaler;
