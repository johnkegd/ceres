<script>
	import { page } from '$app/stores';
	import logo from './ceres-logo.svg';
	import Navigation from '@johnkegd/navigation';
</script>

<header>
	<div class="corner left">
		<a href="/">
			<svg
				version="1.0"
				xmlns="http://www.w3.org/2000/svg"
				width="500.000000pt"
				height="500.000000pt"
				viewBox="0 0 500.000000 500.000000"
				preserveAspectRatio="xMidYMid meet"
			>
				<metadata> Created by potrace 1.16, written by Peter Selinger 2001-2019 </metadata>
				<g
					transform="translate(0.000000,500.000000) scale(.100000,-0.100000)"
					fill="#000000"
					stroke="none"
				>
					<path
						d="M1280 3574 l-715 -715 805 -799 805 -799 140 139 140 140 -345 345
			-345 345 60 60 60 60 240 -238 c132 -130 264 -260 293 -287 l52 -49 0 221 0
			221 -170 188 -171 188 193 193 193 193 177 -177 c172 -172 177 -178 160 -197
			-9 -11 -92 -102 -184 -204 l-168 -183 0 -222 0 -222 108 105 c59 58 197 194
			307 303 l200 197 85 -85 85 -85 -335 -335 -335 -335 142 -142 143 -143 265
			265 c325 324 879 896 884 913 2 6 98 108 215 225 l211 212 -710 710 c-390 391
			-714 710 -720 710 -13 0 -425 -412 -425 -425 0 -5 253 -263 562 -572 l563
			-563 -63 -62 -62 -63 -333 330 c-182 182 -432 428 -553 549 l-221 218 -552
			-553 -552 -553 -60 60 -59 59 570 570 c313 313 570 575 570 580 0 13 -412 425
			-425 425 -6 0 -332 -322 -725 -716z"
					/>
					<path
						d="M2406 2797 c-22 -12 -53 -39 -70 -60 -29 -36 -31 -45 -31 -117 0 -72
			2 -81 31 -117 47 -58 98 -83 169 -83 71 0 122 25 169 83 29 36 31 45 31 117 0
			72 -2 81 -31 117 -47 58 -98 83 -169 83 -44 0 -71 -6 -99 -23z"
					/>
				</g>
			</svg>
		</a>
	</div>

	<div class="corner right">
		<Navigation />
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 4em;
		height: 4em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 3em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
