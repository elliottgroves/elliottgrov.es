<script setup lang="ts">
import Logo from '@/components/svgs/logo.vue'
import Hero from '@/components/hero.vue'
</script>

<template>
  <section class="hero">
    <Hero></Hero>
    <!-- <Logo></Logo> -->
  </section>
</template>

<style lang=scss>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}
</style>