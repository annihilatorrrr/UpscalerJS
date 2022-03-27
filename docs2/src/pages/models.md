# Models

This page contains information on the various models available for use with Upscaler.js

## Overview

All models implement ESRGAN, a neural network architecture for upscaling images.

The original paper, ESRGAN: Enhanced Super-Resolution Generative Adversarial Networks can be found at [arxiv.org/abs/1809.00219](https://arxiv.org/abs/1809.00219).

The code used to train the models can be found at [github.com/idealo/image-super-resolution](https://github.com/idealo/image-super-resolution). 

## Usage

First, install the models:

```bash
npm install @upscalerjs/esrgan
```

Then, you can specify a specific model for use with Upscaler.js:

```javascript
import Upscaler from 'upscaler';
import esrganLarge from '@upscalerjs/esrgan/large-2x';
const upscaler = new Upscaler({
  model: esrganLarge,
});
```

## Available models

Models differ in the following attributes:

- Scale - the desired output of the upscaled image (options: `2x`, `3x`, `4x`)
- Size - how large the neural network is (options: `small`, `medium`, `large`)
- Sharpened - whether the output images are sharpened or not
- Datasets - what dataset the model is trained with (options: `general`, `faces`, `art`)

A number of different comparison images.

Also timing differences.

## Dataset & Training

Upscaler.js offers model flavors trained on three different datasets:

- `general` - This is the Div2K dataset
- `faces` - This is the FFHQ dataset
- `art` - This is the wikiart dataset

## Training Instructions

To train an ESRGAN model, you'll need to be familiar with Python and have access to a GPU. Google Colab offers free GPUs.

[You can find detailed training instructions on the original Python code here](https://github.com/idealo/image-super-resolution#training).
