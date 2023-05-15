<script setup lang="ts">
import Logo from '@/components/svgs/logo.vue'
import Hero from '@/components/hero.vue'
</script>

<template>
  <section class="hero">
    <Hero></Hero>
  </section>
</template>

<style lang=scss>
.hero {
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: center;
}
</style>