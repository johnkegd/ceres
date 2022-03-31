<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter.svelte';
	import { onMount } from 'svelte';
	import { landingScene, resizeHandler } from '$lib/threejs/landing/landing-scene';

	let canvas, innerHeight, innerWidth;

	onMount(() => {
		canvas.width = innerWidth;
		canvas.height = innerHeight;
		landingScene(canvas);
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<svelte:window
	bind:innerWidth
	bind:innerHeight
	onresize={resizeHandler({ innerWidth, innerHeight })}
/>
<canvas bind:this={canvas} />

<style>
</style>
