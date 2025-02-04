import { DefaultUpscalerModel, } from './dependencies.generated';
import type {
  UpscalerOptions,
  TempUpscaleArgs,
  WarmupSizes,
  ResultFormat,
  Progress,
  UpscaleResponse,
  ModelPackage,
  BASE64,
  UpscaleArgs,
  WarmupArgs,
} from './types';
import { loadModel, } from './loadModel.generated';
import { cancellableWarmup, } from './warmup';
import { cancellableUpscale, } from './upscale';
import type { GetImageAsTensorInput, } from './image.generated';
import type { ModelDefinitionObjectOrFn, } from '@upscalerjs/core';
import { getModel, parseUpscaleOptions, } from './utils';

// TODO: Why do we need to explicitly cast this to ModelDefinition?
// This is an ESLint issue, Typescript picks this up correctly
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const DEFAULT_MODEL: ModelDefinitionObjectOrFn = DefaultUpscalerModel;

export class Upscaler {
  _opts: UpscalerOptions;
  _model: Promise<ModelPackage>;
  _ready: Promise<void>;
  _readyResolver?: () => void;
  abortController = new AbortController();

  constructor(opts: UpscalerOptions = {}) {
    this._opts = {
      ...opts,
    };
    this._model = loadModel(getModel(this._opts.model || DEFAULT_MODEL));
    this._ready = new Promise<void>((resolve) => {
      void this.warmup(this._opts.warmupSizes).then(resolve); // skipcq: js-0098
    });
  }

  dispose = async (): Promise<void> => {
    await this._ready;
    const { model, } = await this._model;
    model.dispose();
  };

  getModel = (): Promise<ModelPackage> => this._model;
  warmup = async (warmupSizes: WarmupSizes[] = [], options?: WarmupArgs): Promise<void> => {
    await this._ready;
    return cancellableWarmup(this._model, warmupSizes, options, {
      signal: this.abortController.signal,
    });
  };

  upscale = async<P extends Progress<O, PO>, O extends ResultFormat = BASE64, PO extends ResultFormat = undefined>(
    image: GetImageAsTensorInput,
    options: TempUpscaleArgs<P, O, PO> = {},
  ): Promise<UpscaleResponse<O>> => {
    await this._ready;
    const { model, modelDefinition, } = await this._model;
    const parsedOptions: UpscaleArgs<P, O, PO> = parseUpscaleOptions<P, O, PO>(options);
    return cancellableUpscale(image, parsedOptions, {
      model,
      modelDefinition,
      signal: this.abortController.signal,
    });
  };

  abort = (): void => {
    this.abortController.abort();
    this.abortController = new AbortController();
  };
}

export default Upscaler;
