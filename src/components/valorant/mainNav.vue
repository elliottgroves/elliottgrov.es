<template>
  <nav class="main-nav">
    <router-link to="/easyval" class="logo-link">
      <img :src="logo" alt="Easyval logo">
    </router-link>
    <div class="flex-spacer"></div>
    <div v-if="map">
      <span>{{ map }}</span>
    </div>
  </nav>
</template>

<script>
import logo from 'src/assets/images/valorant/logo.svg'

export default {
  name: 'mainNav.vue',
  props: {
    map: {
      type: String,
      required: false,
      validator: (value) => {
        return ['ascent', 'bind', 'breeze', 'fracture', 'haven', 'icebox', 'split'].includes(value)
      }
    }
  },
  data: () => {
    return {
      logo
    }
  }
}
</script>

<style scoped lang="scss">
  .main-nav {
    font-family: "Zen Kaku Gothic New", sans-serif;
    padding: 1rem;
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    .logo-link {
      display: flex;
      align-items: center;
      img {
        height: 3rem;
      }
    }
    .flex-spacer {
      display: flex;
      flex-grow: 1;
    }
  }
</style>
