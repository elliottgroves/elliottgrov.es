<script setup lang="ts">
import { onMounted } from 'vue'
import { Layout, Fit, Alignment, Rive } from '@rive-app/canvas'

onMounted(() => {
  const layout = new Layout({
    fit: Fit.FitWidth,
    alignment: Alignment.TopCenter,
  });

  // // Constrain the Rive content to (minX, minY), (maxX, maxY) in the canvas
  // layout = new rive.Layout({
  //     fit: rive.Fit.Contain,
  //     minX: 50,
  //     minY: 50,
  //     maxX: 100,
  //     maxY: 100,
  // });

  const r = new Rive({
    canvas: document.getElementById('hero-canvas'),
    src: '/assets/sprout.riv',
    autoplay: true,
    layout: layout
  })
})
</script>

<template>
  <canvas id="hero-canvas" width="900" height="500"></canvas>
</template>