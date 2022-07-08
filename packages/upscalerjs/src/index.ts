/**
 * API documentation for UpscalerJS.
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
export { default, } from './upscaler';
export { AbortError, getRowsAndColumns, getTensorDimensions, } from './upscale';
export type { ModelDefinition, SingleArgProgress, MultiArgProgress, Progress, } from './types';
