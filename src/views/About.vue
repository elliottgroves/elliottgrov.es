<script setup lang="ts">
const headerSrc = new URL('@/images/rug.jpg', import.meta.url).href
const lowResSrc = new URL('@/images/ruglowres.jpg', import.meta.url).href

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
    <img :src="headerSrc" style="background-image: `${lowResSrc}`" alt="A picture of Elliott tweezing a hand-tufted Kirby rug">
    <article>
      <h1>ABOUT</h1>
      <p>Elliott is a frontend developer and UX designer based in Indianapolis. Professionally, he's been designing and making large realtime chat applications in Vue for the past 5 years.</p>
      <p>He's also worked in many other technologies including <span v-for="(tech, index) in techList" :style="{ fontSize: fontSizeForTechListIndex(index) }">{{ tech }}{{ index === techList.length-1 ? '...' : ', ' }}</span></p>
      <p>He loves visual problem solving and any project that ends in making the web more human.</p>
    </article>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  background: #B68DDF;
  font-size: 1.5rem;
  padding: 0;
  border-radius: 2rem;
  overflow: hidden;
  article {
    padding: 1rem;
    flex-grow: 1;
  }
  img {
    flex-grow: 1;
  }
}
h1 {
  letter-spacing: 5px;
  animation: kerning 2s ease-in-out;
  font-weight: bold;
  background: #423E3E;
  border-radius: 5rem 1rem 5rem 1rem;
  padding-left: 2rem;
  margin-bottom: 2rem;
}
@keyframes kerning {
  0% {
    letter-spacing: 10px;
  }
  40% {
    letter-spacing: 30px;
  }
  60% {
    letter-spacing: 35px;
  }
  100% {
    letter-spacing: 5px;
  }
}
@media (prefers-reduced-motion) {
  h1 {
    animation: fade-in 2s ease;
  }
  @keyframes fade-in {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
}
@media screen and (max-width: 575px) {
  section {
    flex-flow: column-reverse;
  }
}
</style>