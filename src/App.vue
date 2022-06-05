<template>
  <router-view></router-view>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style lang="scss">
$primary: #323a45;

body {
  margin: 0;
  background: $primary;
}
@media (max-width: 700px) {
  body {
    overflow-x: hidden;
  }
}

#app {
	background: $primary;
	color: white;
	font-family: 'Roboto', sans-serif;
	display: flex;
	flex-flow: column;
  min-height: 100vh;
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
		}
		nav {
			display: flex;
			padding-top: 0.75rem;
			flex-grow: 1;
			justify-content: center;
			box-shadow: 0 2rem 3rem $primary;
			z-index: 3;
			a {
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
