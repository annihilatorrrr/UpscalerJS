---
id: "modules"
title: "upscaler"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

This is the main Upscaler object.

Instantiate an Upscaler with:

```typescript
import Upscaler from 'upscaler'

const upscaler = new Upscaler()

upscaler.upscale(img).then(src => {
  // display the src
})

@module UpscalerJS

## Classes

- [AbortError](classes/AbortError.md)
- [default](classes/default.md)

## Functions

### getRowsAndColumns

▸ **getRowsAndColumns**(`pixels`, `patchSize`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pixels` | `Tensor3D` \| `Tensor4D` |
| `patchSize` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `columns` | `number` |
| `rows` | `number` |

#### Defined in

[packages/upscalerjs/src/upscale.ts:62](https://github.com/thekevinscott/UpscalerJS/blob/377c165/packages/upscalerjs/src/upscale.ts#L62)

___

### getTensorDimensions

▸ **getTensorDimensions**(`__namedParameters`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.col` | `number` |
| `__namedParameters.height` | `number` |
| `__namedParameters.padding?` | `number` |
| `__namedParameters.patchSize` | `number` |
| `__namedParameters.row` | `number` |
| `__namedParameters.width` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `origin` | [`number`, `number`] |
| `size` | [`number`, `number`] |
| `sliceOrigin` | [`number`, `number`] |
| `sliceSize` | [`number`, `number`] |

#### Defined in

[packages/upscalerjs/src/upscale.ts:139](https://github.com/thekevinscott/UpscalerJS/blob/377c165/packages/upscalerjs/src/upscale.ts#L139)
