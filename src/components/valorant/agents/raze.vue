<template>
	<agent name="Raze" :map="map"></agent>
</template>

<script>
	import Agent from './agent.vue'
	export default {
		name: 'Raze',
		components: {
			Agent
		},
		props: {
			map: {
				type: String,
				required: true,
				validator: (value) => {
					return ['ascent', 'bind', 'breeze', 'fracture', 'haven', 'icebox', 'split'].includes(value)
				}
			}
		}
	}
</script>