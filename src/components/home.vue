<template>
	<div class="home">
		<header role="banner">
			<h1 data-text="Elliott Groves Design">Elliott Groves Design</h1>
			<nav aria-label="Main Navigation" role="navigation">
				<button>
					<i class="material-icons">account_circle</i>
				</button>
				<button>
					<i class="material-icons">view_carousel</i>
				</button>
				<button>
					<i class="material-icons">mail</i>
				</button>
			</nav>
		</header>
		<main ref="main" @scroll="scrollTrack" role="main">
			<img :src="require('@/assets/images/e.svg')" alt="E logo" :style="heroStyles" class="hero-image">
			<article v-for="(article, $index) in articles" :key="$index">
				<p>{{ article }}</p>
			</article>
		</main>
		<footer role="contentinfo"></footer>
	</div>
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
			console.log(rot);
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
.home {
	background: black;
	color: white;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	font-family: 'Roboto', sans-serif;
	display: flex;
	flex-flow: column;
	header {
		display: flex;
		position: relative;
		padding: 0 3.75rem;
		h1 {
			position: absolute;
			writing-mode: vertical-rl;
			font-size: 3rem;
			left: 0.25rem;
			top: 0.75rem;
			white-space: nowrap;
			margin: 0;
			letter-spacing: 0.14rem;
			color: #888;
			&::after {
				content: attr(data-text);
				font-size: 3.08rem;
				user-select: none;
				color: white;
				animation: shadow 5s ease-out 1s infinite forwards;
				position: absolute;
				top: -0.4rem;
			}
		}
		nav {
			display: flex;
			padding-top: 0.75rem;
			flex-grow: 1;
			justify-content: center;
			button {
				margin-right: 1.5rem;
				background: transparent;
				border: none;
				cursor: pointer;
				&:first-of-type {
					margin-left: 1.5rem;
				}
				i {
					color: white;
					font-size: 2.5rem;
				}				
			}
		}
	}
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
}

@keyframes shadow {
	0% {
		transform: translate(0,0);
	}
	20% {
		transform: translate(0.2rem,0.2rem);
	}
	40% {
		transform: translate(0,0.4rem);
	}
	60% {
		transform: translate(-0.2rem, 0.2rem);
	}
	80% {
		transform: translate(0,0);	
	}
}
</style>
