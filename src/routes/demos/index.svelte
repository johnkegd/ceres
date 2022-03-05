<script>
	import { onMount } from 'svelte';
	import { init, updateSizes, scolling } from '$lib/threejs/scene';
	let width, height, el, guiContainer, scrollY, scrollX;
	onMount(() => {
		el.width = width;
		el.height = height;
		init(el, guiContainer);
	});
</script>

<svelte:window
	bind:innerWidth={width}
	bind:innerHeight={height}
	bind:scrollY
	bind:scrollX
	on:scroll={scolling(scrollY)}
	on:resize={updateSizes({ width, height })}
/>

<canvas bind:this={el} {width} {height} />
<div class="lil-gui autoPlace" bind:this={guiContainer} />
<section>Section 1</section>
<section>Section 2</section>
<section>Section 3</section>
<section>Section 4</section>
<section>Section 5</section>

<style>
	canvas {
		position: fixed;
		top: 0;
		left: 0;
		outline: none;
		z-index: -1;
	}

	section {
		color: white;
		height: 400px;
	}
</style>
