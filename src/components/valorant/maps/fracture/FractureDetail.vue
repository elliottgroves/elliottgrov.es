<template>
  <div>
    <component :is="agent" map="fracture"></component>
  </div>
</template>

<script>
import Raze from '@/components/valorant/agents/raze/raze.vue'

export default {
  name: 'FractureDetail',
  title () {
    return `${this.agent.substring(0,1).toUpperCase().concat(this.agent.substring(1))} on Fracture - Easy VALORANT Setups`
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