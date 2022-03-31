<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter.svelte';
	import { onMount } from 'svelte';
	import { landingScene, resizeHandler } from '$lib/threejs/landing/landing-scene';

	let canvas, innerHeight, innerWidth, guiContainer;

	onMount(() => {
		canvas.width = innerWidth;
		canvas.height = innerHeight;
		landingScene(canvas, guiContainer);
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<svelte:window bind:innerWidth bind:innerHeight on:resize={resizeHandler} />
<div class="lil-gui autoPlace" bind:this={guiContainer} />
<canvas bind:this={canvas} />

<style>
</style>
