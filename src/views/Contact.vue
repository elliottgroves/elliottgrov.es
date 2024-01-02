<script setup lang="ts">
import { ref } from 'vue'

const headerSrc = new URL('@/images/rug.jpg', import.meta.url).href

const copySuccess = ref(false)
const copyError = ref(false)

function copyEmailToClipboard() {
  navigator.clipboard.writeText('elliottgrovesdesign@gmail.com').then(() => {
    copySuccess.value = true
    setTimeout(() => {
      copySuccess.value = false
    }, 3000)
  }, function(err) {
    copyError.value = true
  })
}
</script>

<template>
  <section class="container">
    <img :src="headerSrc" alt="A picture of Elliott tweezing a hand-tufted Kirby rug">
    <h1>Contact</h1>
    <p>If you have an exciting project or a web dream you want brought to life, email me below and let's get to work 🚀</p>
    <div class="button-group">
      <a href="mailto:elliottgrovesdesign@gmail.com">
        <Button icon="pi pi-envelope" label="Email me"></Button>
      </a>
      <div class="button-with-message">
        <button @click="copyEmailToClipboard" icon="pi pi-copy" label="Copy email to clipboard"></button>
        <Transition>
          <InlineMessage v-if="copySuccess" severity="success">Successfully copied!</InlineMessage>
        </Transition>
        <Transition>
          <InlineMessage v-if="copyError" severity="warn">Error copying email</InlineMessage>
        </Transition>
      </div>
    </div>
    <p v-if="copyError" class="mt-4">
      The email is elliottgrovesdesign@gmail.com - sorry for the error!
    </p>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-grow: 1;
  .p-card {
    display: flex;
    flex-direction: row-reverse;
    flex-grow: 1;
    background: $alt-bg-color;
    .button-group {
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 1rem;
      button {
        background-color: $accent-color;
        border: none;
        transition: background-color 0.2s ease;
      }
      button:hover {
        background-color: scale-color($accent-color, $lightness: 10%);
      }
      .button-with-message {
        display: flex;
        flex-flow: column;
        gap: 0.5rem;
      }
    }
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