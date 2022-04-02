<script>
	import { onMount } from 'svelte';
	let width, height, el, guiContainer, scrollY, scrollX;

	/* 	import { init, updateSizes, scolling } from '$lib/threejs/scene';
	onMount(() => {
		el.width = width;
		el.height = height;
		init(el, guiContainer);
	}); */
</script>

<!-- <svelte:window
	bind:innerWidth={width}
	bind:innerHeight={height}
	bind:scrollY
	bind:scrollX
	on:scroll={scolling(scrollY)}
	on:resize={updateSizes({ width, height })}
/> -->

<canvas bind:this={el} {width} {height} />
<div class="lil-gui autoPlace" bind:this={guiContainer} />
<section>
	<h1>Section 1</h1>
	<p>description</p>
</section>
<section>
	<h2>Section 2</h2>
	<p>description</p>
</section>
<section>
	<h2>Section 3</h2>
	<p>description</p>
</section>
<section>
	<h2>Section 4</h2>
	<p>description</p>
</section>
<section>
	<h2>Section 5</h2>
	<p>description</p>
</section>

<style>
	canvas {
		position: fixed;
		top: 0;
		left: 0;
		outline: none;
		z-index: -1;
	}

	section {
		display: flex;
		align-items: center;
		height: 100vh;
		position: relative;
		font-family: 'Cabin', sans-serif;
		color: #ffeded !important;
		text-transform: uppercase;
		font-size: 7vmin;
		padding-left: 10%;
		padding-right: 10%;
	}
	section * {
		color: #ffeded !important;
	}
</style>
