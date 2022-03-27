---
sidebar_position: 0
---

# Basic Use Case

Show a basic implementation of Upscaler.js running in the browser.

[See this example live on codesandbox.com](https://githubbox.com/thekevinscott/upscalerjs/tree/main/examples/basic).

## Embedded Version

<iframe src="https://codesandbox.io/embed/github/thekevinscott/upscalerjs/tree/main/examples/basic?fontsize=14&hidenavigation=1&theme=dark"
     style={{ width:'100%', height:500, border:0, borderRadius: '4px', overflow:'hidden', }}
     title="basic-use-case-of-upscalerjs"
     allow=""
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Overview

We start by importing the upscaler, image, and instantiating the upscaler with default values:

```javascript
import Upscaler from 'upscaler';
import img from './flower.png';

const upscaler = new Upscaler();
```

We set up some UI scaffolding, and then upscale the image with:

```javascript
upscaler.upscale(img).then((upscaledImgSrc) => {
```

By default, Upscaler.js returns us an image as a base64 string, which allows us to set the `src` of an HTML image directly:

```javascript
img.src = upscaledImgSrc;
```

If you want to change the input or output formats of the image, check out the API docs.
