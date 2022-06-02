<template>
	<div class="agent-container">
		<div class="agent-info">
			<h3 v-if="map">{{ map }}</h3>
			<h1 class="agent-name">{{ name.toUpperCase() }}</h1>
      <divider text="GAMEPLAY TIPS"></divider>
      <slot name="tips"></slot>
		</div>
	</div>
</template>

<script>
import divider from 'src/components/shared/divider'

export default {
  name: 'Agent',
  components: {
    divider
  },
  props: {
    name: {
      type: String,
      required: true
    },
    map: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped lang="scss">
	.agent-container {
    font-family: "Zen Kaku Gothic New", sans-serif;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: center;
		.agent-info {
			display: flex;
			flex-flow: column;
			flex: 0 1 700px;
      .agent-name {
        font-size: 4rem;
      }
		}
	}
</style>