import { tf } from './dependencies.generated';
import {
  IUpscalerOptions,
  IUpscaleOptions,
  WarmupSizes,
  IModelDefinition,
} from './types';
import loadModel, { getModelDefinitions } from './loadModel';
import warmup from './warmup';
import upscale from './upscale';

class Upscaler {
  _opts: IUpscalerOptions;
  _model: Promise<{
    model: tf.LayersModel;
    modelDefinition: IModelDefinition;
  }>;

  constructor(opts: IUpscalerOptions = {}) {
    this._opts = {
      ...opts,
    };
    this._model = loadModel(this._opts);
    void warmup(this._model, this._opts.warmupSizes || []);
  }

  getModel = () => this._model;
  warmup = async (warmupSizes: WarmupSizes[]) => {
    await warmup(this._model, warmupSizes);
  };

  upscale = async (
    image: string | HTMLImageElement | tf.Tensor3D,
    options: IUpscaleOptions = {},
  ) => {
    const { model, modelDefinition } = await this._model;
    return upscale(model, image, modelDefinition, options);
  };

  getModelDefinitions = async () => {
    return await getModelDefinitions();
  };
}

export default Upscaler;
