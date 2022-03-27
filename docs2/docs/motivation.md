---
sidebar_position: 2
---

# Motivation

This page discusses some of the motivations behind Upscaler.js, including why it exists, why it supports Javascript, and how it's built.

## Why?

Let's say you have an image that you want to use, but it's too small, and you don't have a bigger version:

<a href="https://pixabay.com/photos/elephant-baby-elephant-animals-7036431/" class="full">
  <img src="/img/elephant.jpg" width="64px"/>
  <caption>Image courtesy of Alexas_Fotos on Pixabay</caption>
</a>

That image sure would look better if it were 4 times the size!

If you simply scale the image up, you end up with a pixelated looking image:

<a href="https://pixabay.com/photos/owl-khmer-owl-bird-animal-wildlife-6884773/" class="full">
  <img src="/img/elephant.jpg" width="256px" className="pixelated" />
</a>

Most browsers by default use an algorithm called [bicubic interpolation](https://en.wikipedia.org/wiki/Bicubic_interpolation) to produce a more pleasing version of the image when you display it at a resolution larger than the original image. 

Bicubic interpolation avoids the pixelation, but increases blurriness:

<a href="https://pixabay.com/photos/owl-khmer-owl-bird-animal-wildlife-6884773/" class="full">
  <img src="/img/elephant.jpg" width="256px" />
</a>

Neural Networks [can allow us to "paint in" the expanded sections of the image](https://paperswithcode.com/task/image-super-resolution), enhancing quality.

<a href="https://pixabay.com/photos/owl-khmer-owl-bird-animal-wildlife-6884773/" class="full">
  <img src="/img/elephant-upscaled.png" width="256px" />
</a>

## Why Javascript?

Most cutting edge Neural Networks demand heavy computation and big GPUs, but Upscaler.js leverages Tensorflow.js to run directly in Javascript. 

This allows upscaling to happen right in your browser. Users' data can stay on their machines, and you don't need to set up a server.

You can also upscale images on the server using Node, using the same code you'd write in the browser.
