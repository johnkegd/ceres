<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter.svelte';
	import { onMount } from 'svelte';
	import { landingScene, resizeHandler } from '$lib/threejs/landing/landing-scene';
	import BlackHole from '@johnkegd/graphicarts/BlackHole.svelte';
	let canvas, innerHeight, innerWidth, guiContainer;

	/* onMount(() => {
		canvas.width = innerWidth;
		canvas.height = innerHeight;
		landingScene(canvas, guiContainer);
	}); */
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<!-- <svelte:window bind:innerWidth bind:innerHeight on:resize={resizeHandler} />
<div class="lil-gui autoPlace" bind:this={guiContainer} />
<canvas bind:this={canvas} />
 -->

<BlackHole />
<div class="cont_principal">
	<div class="cont_error">
		<h1>Ceres</h1>
		<p>Page in construction 👨‍💻.</p>
	</div>
</div>

<style>
	h1,
	h2,
	p {
		margin: 0 auto;
		color: white;
	}
	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}
	p {
		margin: 1em auto;
	}
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
		h2 {
			font-size: 0.55em;
		}
	}
	@media (min-width: 1080px) {
		h1 {
			font-size: 6em;
		}
		h2 {
			font-size: 2em;
		}
	}

	.cont_principal {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden;
		position: absolute;
		padding: 10px;
	}

	.cont_error > h1 {
		font-family: 'Lato', sans-serif;
		font-weight: 400;
		/* 	position: relative;
		left: -100%; */
		transition: all 0.5s;
	}

	.cont_error > p {
		font-family: 'Lato', sans-serif;
		font-weight: 300;
		font-size: 24px;
		letter-spacing: 5px;
		color: #9294ae;
	}
	.cont_error {
		text-align: center;
	}
</style>
