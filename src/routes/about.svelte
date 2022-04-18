<script context="module">
	import { browser, dev } from '$app/env';
	import SocialMedia from '$lib/SocialMedia.svelte';

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
	<div class="image-container">
		<a href="https://www.linkedin.com/in/manuel-duran-a99280217/" target="_Blank">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img src="images/manuel-duran-profile-picture.jpeg" alt="Manuel Duran picture" />
		</a>
	</div>
	<h1>Manuel Duran</h1>

	<p>I am a digital content developer, creative and passionate about art, under the name of:</p>

	<!-- TODO lose the @next! -->
	<pre class="brand">Ceres</pre>

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
	<SocialMedia />
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}

	.content *:not(.brand) {
		color: var(--pure-white);
	}

	pre {
		text-align: center;
		text-transform: uppercase;
		text-shadow: 1px 1px black;
		-webkit-text-stroke-width: thick;
		letter-spacing: 15px;
		color: var(--pure-white);
		background-image: url('images/triangles-art.jpg');
		background-repeat: no-repeat;
		background-size: 700px;
		animation: bg-animation 5s ease-out infinite;
	}

	ul {
		color: var(--heading-color);
	}

	h1 {
		text-align: center;
	}
	img {
		width: 150px;
		height: 150px;
		border-radius: 50%;

		object-fit: cover;
		object-position: center right;
	}
	.image-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@keyframes bg-animation {
		0% {
			background-position: 0% 40%;
		}

		25% {
			background-position: 100% 30%;
		}

		50% {
			background-position: 50% 20%;
		}

		75% {
			background-position: 0% 15%;
		}

		100% {
			background-position: 100% 10%;
		}
	}
</style>
