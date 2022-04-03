---
sidebar_position: 0
---

# Basic Use Case

Shows a basic implementation of Upscaler.js running in the browser.

## Code

<iframe src="https://codesandbox.io/embed/github/thekevinscott/upscalerjs/tree/main/examples/basic?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
  title="basic-use-case-of-upscalerjs"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

[See this example live on codesandbox.com](https://githubbox.com/thekevinscott/upscalerjs/tree/main/examples/basic).

## Tutorial

We start by importing the upscaler, image, and instantiating the upscaler with default values:

```javascript
import Upscaler from 'upscaler';
import img from './flower.png';

const upscaler = new Upscaler();
```

The next bit of code does some UI scaffolding, and then we upscale the image with:

```javascript
upscaler.upscale(img).then((upscaledImgSrc) => {
```

By default, Upscaler.js returns an image as a base64 string, which allows us to set the `src` of an HTML image directly:

```javascript
img.src = upscaledImgSrc;
```

## Next

Next up we'll discuss how to upload an image for upscaling.
