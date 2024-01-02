<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'

import { onMounted } from 'vue'

onMounted(() => {
  const landingSections = document.querySelectorAll('section')

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('onscreen', entry.isIntersecting)
      entry.target.classList.toggle('offscreen', !entry.isIntersecting)
      const number = entry.target.dataset.sectionNum
      if (!entry.isIntersecting && entry.boundingClientRect.top < 0 && number % 2) {
        console.log(number)
      } else {
        console.log(number)
      }
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: .75
  })

  landingSections.forEach(section => {
    observer.observe(section)
  })
})
</script>

<template>
  <section data-section-num="1" class="jumbotron">
    <div class="three-container">
      <TresCanvas clear-color="#B68DDF">
        <TresPerspectiveCamera />
        <OrbitControls :autoRotate="true" :autoRotateSpeed="2" :enableZoom="false"/>
        <TresMesh>
          <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
          <TresMeshBasicMaterial color="orange" />
        </TresMesh>
      </TresCanvas>
    </div>
    <p>feature your product</p>
  </section>
  <section data-section-num="2" class="jumbotron">
    <p>or small business</p>
    <div></div>
  </section>
  <section data-section-num="3" class="jumbotron">
    <div></div>
    <p>or tell your story</p>
  </section>
  <section data-section-num="4" class="jumbotron">
    <div class="container">
      <a href="/contact">
        <button>Contact Me</button>
      </a>
    </div>
  </section>
</template>

<style scoped lang=scss>
section {
  font-size: 2rem;
  display: grid;
  height: 60vh;
  height: 60svh;
  place-items: center;
  &:nth-child(odd) {
    grid-template-columns: 2fr 1fr;
    background: #B68DDF;
    p {
      justify-self: start;
    }
  }
  &:nth-child(even) {
    grid-template-columns: 1fr 2fr;
    p {
      justify-self: end;
    }
  }
  .three-container {
    height: 75%;
    width: 100%;
  }
  p {
    opacity: 0;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }
  :nth-child(odd) p {
    transform: translateX(3rem);
  }
  :nth-child(even) p {
    transform: translateX(-3rem);
  }

  &.onscreen p {
    opacity: 1;
    transform: translate(0px);
  }
}
</style>