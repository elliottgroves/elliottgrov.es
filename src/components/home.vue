<template>
	<div class="home">
		<div class="coming-soon-container">
			<div class="logo">
				<img :src="require('@/assets/images/e.svg')">
			</div>
			<p class="label">March 2020</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'home',
}
</script>

<style scoped lang="scss">
.home {
	background: #000000;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	
	font-family: Helvetica;
	.coming-soon-container {
		display: flex;
		flex-flow: column;
		
		align-items: center;
		justify-content: center;
		height: 100%;
		.logo {
			user-select: none;
			@keyframes logoAnim {
				0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
				100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
			}
			img {
				animation-name: logoAnim;
				animation-duration: 5s;
				animation-iteration-count: infinite;
			}
		}
		.label {
			color: rgba(255,255,255,0.4);
			font-size: 1.4em;
			position: fixed;
			bottom: 0;
			font-style: italic;
			letter-spacing: 0.3em;
		}
	}
}
</style>
