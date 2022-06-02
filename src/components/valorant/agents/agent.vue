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
  @media (max-width: 700px) {
    .agent-container {
      height: 100%;
      .agent-info {
        width: 100%;
        padding: 0 30px;
        .agent-name {
          font-size: 4rem;
        }
      }
    }
  }
</style>

<style lang="scss">
.agent-info {
  ol {
    padding-left: 20px;
    list-style-position: outside;
  }
}
</style>