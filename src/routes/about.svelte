<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>Manuel Duran</h1>

	<p>I am a digital content developer, creative and passionate about art, under the name of:</p>

	<!-- TODO lose the @next! -->
	<pre>Ceres</pre>

	<p>
		Offer to you the best quality of digital products is my main goal, achieve the best result in
		whatever you are looking, leaving my creativity talent to fly. My strength is digital art,
		implemented programs like:
	</p>
	<ul>
		<li>Photoshop (Graphic Designs)</li>
		<li>Blender (3d Designs and Animations)</li>
		<li>Fl studio (Production and development of music tracks and sound effects)</li>
		<li>HTML(Web) -CSS(Web)</li>
	</ul>

	<p>
		I look forward to working together with my customers and helping you achieve exactly what
		they're looking for. Visit my <a href="/todos">TODOs</a> page and tell me what i could improve in
		my portfolio!
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}

	pre {
		text-align: center;
		text-transform: uppercase;
		text-shadow: 1px 1px black;
		-webkit-text-stroke-width: thick;
		letter-spacing: 15px;
		color: #0e0e0e29;
	}

	ul {
		color: var(--heading-color);
	}
</style>
