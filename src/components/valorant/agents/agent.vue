<template>
	<div class="agent-container">
		<div class="agent-info">
			<h3 v-if="map">{{ map }}</h3>
			<h1>{{ name }}</h1>	
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Agent',
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
			flex: 0 1 800px;
		}
	}
</style>