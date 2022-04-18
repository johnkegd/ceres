<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter.svelte';
	import SocialMedia from '$lib/SocialMedia.svelte';
	import { onMount } from 'svelte';

	import Experience from '$lib/threejs/experience/Experience';
	//import { landingScene, resizeHandler } from '$lib/threejs/landing/landing-scene';

	let canvas, innerHeight, innerWidth, guiContainer;

	const loadHandler = (ev) => {
		console.log(ev);
	};

	onMount((ev) => {
		// update canvas sizes before sending to the experience to prevent errors;
		canvas.width = innerWidth;
		canvas.height = innerHeight;
		//let experience = new Experience(canvas);

		// needed because issue in initialization. camera not well positioned
		window.setTimeout(() => {
			window.dispatchEvent(new CustomEvent('resize'));
		}, 0);

		console.log('on mount', ev, window);
	});
</script>

<svelte:head>
	<title>Ceres Home</title>
</svelte:head>

<svelte:window bind:innerWidth bind:innerHeight />
<div class="lil-gui autoPlace" bind:this={guiContainer} />
<canvas bind:this={canvas} width={innerWidth} height={innerHeight} />

<section>
	<div class="cont_principal">
		<div class="cont_error">
			<h1>Ceres</h1>
			<p>Page in construction 👨‍💻.</p>
		</div>
	</div>
	<SocialMedia />
</section>

<style>
	h1,
	h2,
	p {
		color: white;
	}
	h1 {
		font-weight: 700;
	}

	section {
		display: grid;
		margin: auto;
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
