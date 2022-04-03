---
id: "default"
title: "Class: default"
sidebar_label: "default"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new default**(`opts?`)

Constructor

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `IUpscalerOptions` |

#### Defined in

[packages/upscalerjs/src/upscaler.ts:50](https://github.com/thekevinscott/UpscalerJS/blob/4f75366/packages/upscalerjs/src/upscaler.ts#L50)

## Methods

### abort

▸ **abort**(): `void`

#### Returns

`void`

#### Defined in

[packages/upscalerjs/src/upscaler.ts:91](https://github.com/thekevinscott/UpscalerJS/blob/4f75366/packages/upscalerjs/src/upscaler.ts#L91)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/upscalerjs/src/upscaler.ts:58](https://github.com/thekevinscott/UpscalerJS/blob/4f75366/packages/upscalerjs/src/upscaler.ts#L58)

___

### getModel

▸ **getModel**(): `Promise`<{ `model`: `LayersModel` ; `modelDefinition`: `IModelDefinition`  }\>

#### Returns

`Promise`<{ `model`: `LayersModel` ; `modelDefinition`: `IModelDefinition`  }\>

#### Defined in

[packages/upscalerjs/src/upscaler.ts:63](https://github.com/thekevinscott/UpscalerJS/blob/4f75366/packages/upscalerjs/src/upscaler.ts#L63)

___

### getModelDefinitions

▸ **getModelDefinitions**(): `Promise`<`ModelDefinitions`\>

#### Returns

`Promise`<`ModelDefinitions`\>

#### Defined in

[packages/upscalerjs/src/upscaler.ts:87](https://github.com/thekevinscott/UpscalerJS/blob/4f75366/packages/upscalerjs/src/upscaler.ts#L87)

___

### upscale

▸ **upscale**<`P`, `O`, `PO`\>(`image`, `options?`): `Promise`<`UpscaleResponse`<`O`\>\>

Upscales a given image.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `Progress`<`O`, `PO`\> |
| `O` | extends `ResultFormat` = ``"src"`` |
| `PO` | extends `ResultFormat` = `undefined` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `image` | `GetImageAsTensorInput` | the image to upscale. |
| `options` | `UpscaleArgs`<`P`, `O`, `PO`\> | a set of upscaling arguments |

#### Returns

`Promise`<`UpscaleResponse`<`O`\>\>

an upscaled image

#### Defined in

[packages/upscalerjs/src/upscaler.ts:75](https://github.com/thekevinscott/UpscalerJS/blob/4f75366/packages/upscalerjs/src/upscaler.ts#L75)

___

### warmup

▸ **warmup**(`warmupSizes`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `warmupSizes` | `WarmupSizes`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/upscalerjs/src/upscaler.ts:64](https://github.com/thekevinscott/UpscalerJS/blob/4f75366/packages/upscalerjs/src/upscaler.ts#L64)
