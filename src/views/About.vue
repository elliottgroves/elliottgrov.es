<script setup lang="ts">
import Card from 'primevue/card'

const headerSrc = new URL('@/images/rug.jpg', import.meta.url).href

const techList: Array<string> = ['Angular', 'React', 'Django', 'Go', 'Gatsby', 'Nuxt', 'Unity', 'Processing', 'Ruby on Rails', 'D3', 'Highcharts', 'Java', 'Selenium', 'Appium']

function fontSizeForTechListIndex (index: number) {
  if (index < 3) {
    return '1rem'
  }
  const percentProgress = 0.5 * ((index - 2) / (techList.length - 3))
  return `${1 - percentProgress}rem`
}
</script>

<template>
  <section class="container">
    <Card>
      <template #header>
        <img :src="headerSrc" alt="A picture of Elliott tweezing a hand-tufted Kirby rug">
      </template>
      <template #title>
        About
      </template>
      <template #content>
        <p>Elliott is a software engineer and UX designer based in Indianapolis. Professionally, he's been designing and making large realtime chat applications in Vue for the past 5 years.</p>
        <p>He's also worked in many other technologies including <span v-for="(tech, index) in techList" :style="{ fontSize: fontSizeForTechListIndex(index) }">{{ tech }}{{ index === techList.length-1 ? '...' : ', ' }}</span></p>
        <p>He loves visual problem solving and any project that ends in making the web more human.</p>
      </template>
    </Card>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-grow: 1;
  .p-card {
    display: flex;
    flex-grow: 1;
    background: $alt-bg-color;
  }
}
@media screen and (max-width: 575px) {
  section .p-card {
    flex-flow: column-reverse;
  }
}
</style>

<style lang="scss">
.p-card-header, .p-card-body {
  display: flex;
  flex-basis: 50%;
  img {
    width: 100%;
    object-fit: cover;
  }
}
.p-card-body {
  display: flex;
  flex-flow: column;
}
</style>