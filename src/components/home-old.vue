<template>
	<main ref="main" @scroll="scrollTrack" role="main">
		<img :src="require('@/assets/images/e.svg')" alt="E logo" :style="heroStyles" class="hero-image">
		<article v-for="(article, $index) in articles" :key="$index">
			<p>{{ article }}</p>
		</article>
	</main>
</template>

<script>
export default {
	name: 'home',
	data: () => ({
		activeArticleIndex: 0,
		articles: [
			"Example article",
			"Accessibility is not an afterthought",
			"Accessibility is not an afterthought",
			"Accessibility is not an afterthought",
			"Accessibility is not an afterthought",
			"Accessibility is not an afterthought",
			"Accessibility is not an afterthought",
		],
		heroScrollAmount: 0,
	}),
	computed: {
		heroStyles() {
			const rot = this.heroScrollAmount * 360 % 360;
			return { transform: `rotate3d(0, 1, 1, ${rot}deg)`};
		},
	},
	methods: {
		scrollTrack() {
			const main = this.$refs.main;
			this.heroScrollAmount = main.scrollTop / (main.scrollHeight - main.clientHeight);
		}
	}
}
</script>

<style scoped lang="scss">
main {
	display: flex;
	flex-flow: column;
	align-items: center;
	flex-grow: 1;
	font-family: 'Roboto', sans-serif;
	font-size: 1.8rem;
	position: relative;
	overflow-y: scroll;
	.hero-image {
		z-index: 1;
		position: fixed;
		top: 10rem;
	}
	article {
		z-index: 2;
		width: 50%;
		flex: 0 0 50%;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #0006;
		border: 1px solid #fff;
		border-radius: 4px;
		margin-bottom: 4rem;
		&:first-of-type {
			margin-top: 4rem;
		}
	}
}
</style>