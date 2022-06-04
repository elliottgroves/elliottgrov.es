<template>
	<agent name="Raze" role="duelist" :map="map">
    <template v-slot:tips>
      <vue-markdown :source="tips"></vue-markdown>
    </template>
    <template v-slot:reasons>
      <vue-markdown :source="reasons"></vue-markdown>
    </template>
  </agent>
</template>

<script>
import VueMarkdown from 'vue-markdown-render'
import Agent from '../agent.vue'
import raze from './raze.js'

export default {
  name: 'Raze',
  components: {
    Agent,
    VueMarkdown
  },
  props: {
    map: {
      type: String,
      required: true,
      validator: (value) => {
        return ['ascent', 'bind', 'breeze', 'fracture', 'haven', 'icebox', 'split'].includes(value)
      }
    }
  },
  computed: {
    tips () {
      return this.map ? raze[this.map].tips : ''
    },
    reasons () {
      return this.map ? raze[this.map].reasons : ''
    }
  }
}
</script>