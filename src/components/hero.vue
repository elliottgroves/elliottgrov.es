<script setup lang="ts">
import { onMounted } from 'vue'
import { Rive } from '@rive-app/canvas'

onMounted(() => {
  new Rive({
    canvas: document.getElementById('hero-canvas'),
    src: '/assets/sprout.riv',
    autoplay: true
  })
})
</script>

<template>
  <canvas id="hero-canvas" width="900" height="500"></canvas>
</template>

