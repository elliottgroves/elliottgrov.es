<template>
	<div>
		<component :is="agent" map="ascent"></component>
	</div>
</template>

<script>
import Raze from '@/components/valorant/agents/raze.vue'

export default {
  name: 'AscentDetail',
  title () {
    return `${this.agent} on Ascent - Easy VALORANT Setups`
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