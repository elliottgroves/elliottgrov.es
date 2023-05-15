<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import Menubar from 'primevue/menubar'
import LogoSmall from '@/components/svgs/logoSmall.vue'

const navMenuItems = ref([
  {
    label: 'About',
    icon: 'pi pi-fw pi-book'
  },
  {
    label: 'Contact Me!',
    icon: 'pi pi-fw pi-envelope'
  }
])
</script>

<template>
  <Menubar :model="navMenuItems" class="container">
    <template #start>
      <LogoSmall></LogoSmall>
    </template>
  </Menubar>
  <main class="container">
    <RouterView />
  </main>
</template>