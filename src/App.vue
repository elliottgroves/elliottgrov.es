<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import Logo from '@/components/svgs/logo.vue'

const navMenuItems = ref([
  {
    label: 'About',
    icon: 'pi pi-fw pi-book',
    to: { name: 'about' }
  },
  {
    label: 'Github',
    icon: 'pi pi-fw pi-github',
    url: 'https://www.github.com/elliottgroves',
    target: '_blank'
  },
  {
    label: 'Contact Me!',
    icon: 'pi pi-fw pi-envelope',
    to: { name: 'contact' }
  }
])

onMounted(() => {
  const nav = document.getElementById('main-nav')
  const intercept = document.createElement('div')

  intercept.setAttribute('data-observer-intercept', '')
  nav.before(intercept)

  const observer = new IntersectionObserver(([entry]) => {
    nav.classList.toggle('scrolled-down', !entry.isIntersecting)
  })

  observer.observe(intercept);
})
</script>

<template>
  <nav id="main-nav">
    <RouterLink to="/" class="home-link-logo">
      <logo></logo>
    </RouterLink>
    <span>elliott groves design</span>
    <a href="/about">about</a>
    <a href="/contact">contact</a>
  </nav>
  <main>
    <RouterView/>
  </main>
  <footer class="container">
    <p>Made with love in 2023<i class="pi pi-heart"></i></p>
  </footer>
</template>

<style scoped lang="scss">
#main-nav {
  font-family: 'DM Sans', sans-serif;
  font-size: 2rem;
  text-underline-offset: 0.5rem;
  padding: 0.5rem;
  position: sticky;
  top: 0;
  display: flex;
  gap: 1rem;

  overflow-y: visible;
  z-index: 10;
  background: #423E3E;
  
  svg {
    transition: width 0.75s ease;
    height: auto;
    width: min(250px, 20vw);
  }
  span {
    transition: padding-top 0.75s ease;
    padding-top: 1rem;
    color: #B68DDF;
  }
  a:not(.home-link-logo) {
    transition: padding-top 0.75s ease;
    padding-top: 1rem;
    color: #8D90DF;
  }

  @media (prefers-reduced-motion) {
    svg {
      width: min(200px, 15vw);
    }
    span {
      padding-top: 0rem;
    }
    a:not(.home-link-logo) {
      padding-top: 0rem;
    }
  }

  &.scrolled-down {
    svg {
      width: min(200px, 15vw);
    }
    span {
      padding-top: 0rem;
      color: #B68DDF;
    }
    a {
      padding-top: 0rem;
      color: #8D90DF;
    }
  }
}
footer {
  display: flex;
  justify-content: flex-end;
  padding-top: 3rem;
  padding-bottom: 1rem;
  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>