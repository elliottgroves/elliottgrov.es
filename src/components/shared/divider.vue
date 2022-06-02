<template>
  <div class="divider-container">
    <div class="divider"></div>
    <span v-if="text" class="divider-text">{{ text }}</span>
    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  name: "divider",
  props: {
    text: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped lang="scss">
.divider-container {
  width: 100%;
  display: flex;
  align-items: center;
  .divider {
    height: 1px;
    background: white;
    flex-grow: 1;
  }
  .divider-text {
    font-family: "Lexend Exa", sans-serif;
    flex-shrink: 0;
    margin: 0 1rem;
  }
}
</style>