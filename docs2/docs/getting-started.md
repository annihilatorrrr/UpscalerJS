---
sidebar_position: 1
---

# Getting Started

Upscaler.js is a package for upscaling images using Javascript. It works in the browser and in Node.

To learn more about what upscaling is and why you'd want to do so in Javascript, read [Motivation](motivation).

## Quick Start

### Browser

```javascript
import Upscaler from 'upscaler';
const upscaler = new Upscaler();
upscaler.upscale('/path/to/image').then(upscaledImage => {
  console.log(upscaledImage); // base64 representation of image src
});
```

### Node

In Node, use the appropriate package that matches your Tensorflow.js installation.

#### `tensorflow/tfjs-node`

```javascript
const Upscaler = require('upscaler/node');
const upscaler = new Upscaler();
upscaler.upscale('/path/to/image').then(upscaledImage => {
  console.log(upscaledImage); // base64 representation of image src
});
```

#### `tensorflow/tfjs-node-gpu`

```javascript
const Upscaler = require('upscaler/node-gpu');
const upscaler = new Upscaler();
upscaler.upscale('/path/to/image').then(upscaledImage => {
  console.log(upscaledImage); // base64 representation of image src
});
```
## Install Upscaler.js

You can install Upscaler.js from NPM:

```bash
npm install upscaler
```

This contains both the browser and Node-based versions of the package.

You can also install associated models. For information on available models, check out [Models](/models).

## Dependencies

Upscaler.js expects Tensorflow.js to be available in an appropriate flavor.

### Browser

If running in the browser, UpscalerJS expects `@tensorflow/tfjs` to be available as a peer dependency. You can install Tensorflow.js with:

```bash
npm install @tensorflow/tfjs
```

### Node

If running in Node, UpscalerJS expects either `@tensorflow/tfjs-node` or `@tensorflow/tfjs-node-gpu` to be available as a peer dependency, depending on whether you import `upscaler/node` or `upscaler/node-gpu`. You can install Tensorflow.js for Node with:

```bash
npm install @tensorflow/tfjs-node
```

or, for GPU support:

```bash
npm install @tensorflow/tfjs-node-gpu
```
