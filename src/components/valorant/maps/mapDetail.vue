<template>
  <div class="map-detail">
    <nav>
      <router-link to="/easyval" class="logo-link">
        <img :src="logo" alt="Easyval logo">
      </router-link>
    </nav>
    <slot name="agents"></slot>
    <slot name="optional-agents"></slot>
  </div>
</template>

<script>
import logo from 'src/assets/images/valorant/logo.svg'

export default {
  name: 'mapDetail',
  data: () => {
    return {
      logo
    }
  }
}
</script>

<style scoped lang="scss">
.map-detail {
  nav {
    padding: 1rem;
    margin-bottom: 0.5rem;
  }
}
</style>