<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { ref } from 'vue'
import Menubar from 'primevue/menubar'
import LogoSmall from '@/components/svgs/logoSmall.vue'

const navMenuItems = ref([
  {
    label: 'About',
    icon: 'pi pi-fw pi-book',
    to: { name: 'about' }
  },
  {
    label: 'Contact Me!',
    icon: 'pi pi-fw pi-envelope',
    to: { name: 'contact' }
  }
])
</script>

<template>
  <Menubar :model="navMenuItems" class="main-nav container mb-4">
    <template #start>
      <RouterLink :to="{ name: 'landing' }" class="mr-4">
        <LogoSmall></LogoSmall>
      </RouterLink>
    </template>
  </Menubar>
  <main class="container">
    <RouterView />
  </main>
  <footer class="container">
    <p>Made with love in 2023<i class="pi pi-heart"></i></p>
  </footer>
</template>

<style scoped lang="scss">
.main-nav {
  position: sticky;
  top: 0;
  z-index: 10;
}
main {
  display: flex;
  flex-grow: 1;
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