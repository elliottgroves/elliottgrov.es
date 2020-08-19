<template>
	<main role="main">
		<h1>The web should be</h1>
		<transition mode="out-in" name="svgs">
			<component :is="svgs[activeSvgIndex]" :animation-time="svgAnimationMs"></component>
		</transition>
	</main>
</template>

<script>
import Natural from './svgs/natural.vue';
import Intuitive from './svgs/intuitive.vue';
import Frictionless from './svgs/frictionless.vue';

export default {
	name: 'home',
	components: {
		Natural,
		Intuitive,
		Frictionless
	},
	data: () => ({
		svgs: ['natural', 'intuitive', 'frictionless'],
		// svgs: ['natural'],
		activeSvgIndex: 0,
		rotateSvgInterval: null,
		svgAnimationMs: 4500,
	}),
	methods: {
		incrementActiveSvgIndex() {
			if(this.activeSvgIndex + 1 >= this.svgs.length) {
				this.activeSvgIndex = 0;
			} else {
				this.activeSvgIndex += 1;
			}
		}
	},
	created() {
		this.rotateSvgInterval = setInterval(this.incrementActiveSvgIndex, this.svgAnimationMs);
	},
	beforeDestroy() {
		clearInterval(this.rotateSvgInterval);
	},
}
</script>

<style scoped lang="scss">
main {
	font-family: 'Roboto', sans-serif;
	font-size: 1.4rem;

	display: flex;
	flex-flow: column;
	align-items: center;
	flex-grow: 1;
	
	padding-top: 6rem;

	// Transitions
	.svgs-enter-active {
		transition: all 0.4s ease-out;
		transition-property: transform, opacity;
	} 
	.svgs-leave-active {
		transition: all 0.7s ease-in;
		transition-property: transform, opacity;
	}
	.svgs-enter-to, .svgs-leave {
		transform: translateY(0);
		opacity: 1;
	}
	.svgs-enter, .svgs-leave-to {
		transform: translateY(2rem);
		opacity: 0;
	}
}
</style>
