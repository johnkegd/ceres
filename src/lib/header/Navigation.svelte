<script>
	export let pathname = '/';
	let burgerMenuOpen = false;
	function menuCloseHandler() {
		console.log('close handler');
		burgerMenuOpen = false;
	}
</script>

<input id="burger" type="checkbox" bind:checked={burgerMenuOpen} />

<label for="burger" aria-label="navigation" role="button">
	<span />
	<span />
	<span />
</label>

<nav>
	<ul on:click={menuCloseHandler}>
		<li class:active={pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
		<li class:active={pathname === '/about'}>
			<a sveltekit:prefetch href="/about">About</a>
		</li>
		<li class:active={pathname === '/todos'}>
			<a sveltekit:prefetch href="/todos">Todos</a>
		</li>
	</ul>
</nav>

<style>
	div {
		position: relative;
		width: 2em;
	}
	input + label {
		position: absolute;
		top: 10px;
		right: 20px;
		height: 20px;
		width: 30px;
		z-index: 5;
	}
	input + label span {
		position: absolute;
		width: 100%;
		height: 2.5px;
		top: 50%;
		left: 0;
		display: block;
		background: var(--pure-black);
		transition: 0.5s;
	}
	input + label span:first-child {
		top: 3px;
	}
	input + label span:last-child {
		top: 16px;
	}
	label:hover {
		cursor: pointer;
	}
	input:checked + label span {
		opacity: 0;
		top: 50%;
	}
	input:checked + label span:first-child {
		opacity: 1;
		transform: rotate(405deg);
	}
	input:checked + label span:last-child {
		opacity: 1;
		transform: rotate(-405deg);
	}
	input:checked + label span {
		background: black;
	}

	nav {
		background: white;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 0%;
		z-index: 3;
		transition: 0.5s;
		transition-delay: 0.5s;
		overflow: hidden;
	}
	nav > ul {
		text-align: center;
		position: absolute;
		top: 35%;
		left: 20%;
		right: 20%;
		text-decoration: none;
		list-style: none;
	}
	nav > ul > li {
		opacity: 0;
		transition: 0.5s;
		transition-delay: 0s;
	}
	nav > ul > li > a {
		text-decoration: none;
		text-transform: uppercase;
		color: #020304;
		font-weight: 700;
		font-family: sans-serif;
		display: block;
		padding: 30px;
	}
	input:checked ~ nav {
		height: 100%;
		transition-delay: 0s;
	}
	input:checked ~ nav > ul > li {
		opacity: 1;
		transition-delay: 0.5s;
	}
	input {
		opacity: 0;
		display: none !important;
	}
	li.active a::before {
		--size: 7px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		/* top: 0; */
		left: calc(46% - var(--size));
		border: var(--size) solid transparent;
		border-left: var(--size) solid var(--accent-color);
	}

	li.active a {
		color: var(--accent-color);
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
