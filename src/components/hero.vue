<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Layout, Fit, Alignment, Rive } from '@rive-app/canvas'

const canvasWidth = ref(900)
const canvasHeight = ref(450)

onMounted(() => {
  const r = new Rive({
    canvas: document.getElementById('hero-canvas'),
    src: '/assets/sprout.riv',
    animations: ['plant grow', 'sway'],
    autoplay: true
  })
})
</script>

<template>
  <canvas id="hero-canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
</template>

<style>
#hero-canvas {
  width: 900px;
  height: 450px;
}
@media screen and (max-width: 900px) {
  #hero-canvas {
    width: 354px;
    height: 169px;
  }
}
</style>