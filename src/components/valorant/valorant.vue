<template>
	<div class="easyval-home">
    <nav>
      <router-link to="/easyval" class="logo-link">
        <img :src="logo" alt="Easyval logo">
      </router-link>
    </nav>
    <div class="map-selector">
      <router-link v-for="map in maps" :to="`/easyval/${map}`" :key="map" class="map-link">
        {{ map.substr(0,1).toUpperCase().concat(map.substr(1)) }}
      </router-link>
    </div>
	</div>
</template>

<script>
import logo from 'src/assets/images/valorant/logo.svg'

export default {
	name: 'Valorant',
  title: 'Easy VALORANT Setups',
  data: () => {
    return {
      logo,
      maps: [
          'ascent',
          'bind',
          'breeze',
          'fracture',
          'haven',
          'icebox',
          'split'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.easyval-home {
  color: white;
  font-family: "Zen Kaku Gothic New", sans-serif;
  display: flex;
  flex-flow: column;
  nav {
    padding: 1rem;
    margin-bottom: 0.5rem;
  }
  header {
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    h3 {
      margin: 0;
    }
  }
  .map-selector {
    display: flex;
    flex-flow: column;
    overflow: auto;
    font-family: "Jockey One", sans-serif;
    font-size: 1.8rem;
    text-transform: uppercase;
    flex-grow: 1;
    .map-link {
      font-size: 4rem;
      text-decoration: none;
      color: white;
      text-align: center;
      padding: 1rem 0;
      &:visited {
        color: white;
      }
      &:nth-child(odd) {
        background: #fff1;
      }
    }
  }
}
</style>