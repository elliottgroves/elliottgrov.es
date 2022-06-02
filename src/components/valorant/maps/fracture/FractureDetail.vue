<template>
  <div>
    <component :is="agent" map="fracture"></component>
  </div>
</template>

<script>
import Raze from '@/components/valorant/agents/raze.vue'

export default {
  name: 'FractureDetail',
  title () {
    return `${this.agent} on Fracture - Easy VALORANT Setups`
  },
  components: {
    Raze
  },
  props: {
    agent: {
      type: String,
      required: true
    }
  }
}
</script>