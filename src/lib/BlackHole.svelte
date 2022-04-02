<script>
	import { onMount } from 'svelte';
	export const config = {
		particlesNumber: 20,
		fillStyle: 'rgba(0,0,0,0.5)',
		reDrawFillStyle: null,
		chaos: 350
	};
	let canvas;
	let innerWidth;
	let innerHeight;
	var particles = [];
	let ctx;
	let start,
		oldTimeStamp,
		speed = 10000;

	onMount(() => {
		ctx = canvas.getContext('2d');
		let frame = requestAnimationFrame(loop);
		ctx.fillStyle = config.fillStyle;
		ctx.fillRect(0, 0, innerWidth, innerHeight);

		function loop(timeStamp) {
			frame = requestAnimationFrame(loop);
			if (start === undefined) {
				start = timeStamp;
				oldTimeStamp = timeStamp + speed;
			}
			if (timeStamp >= oldTimeStamp) {
				oldTimeStamp = timeStamp + speed;

				ctx.fillStyle = config.fillStyle;
				ctx.fillRect(0, 0, innerWidth, innerHeight);

				for (var i = 0; i < config.particlesNumber; i++) {
					particles.push(new Particle());
				}

				for (let i in particles) {
					particles[i].draw();
					particles[i].update();

					if (particles[i].life >= particles[i].lifemax) {
						delete particles[i];
					}
				}
			} else {
				oldTimeStamp = timeStamp;
			}
		}
		return () => {
			cancelAnimationFrame(frame);
		};
	});

	class Particle {
		constructor() {
			this.x = Math.random() * innerWidth;
			this.y = Math.random() * innerHeight;
			this.vx = 10;
			this.vy = 0;
			this.ax = 0;
			this.ay = 0;
			this.life = 0;
			this.lifemax = 75;
			this.gravity = 0;
			this.fade = 1;
			this.w = 2;
			this.h = 2;

			this.draw = function () {
				ctx.fillStyle = 'rgba(0,115,213,' + this.fade + ')';
				ctx.fillRect(this.x, this.y, this.w, this.h);
			};

			this.update = function () {
				this.w += 0.04;
				this.h += 0.04;
				this.vy += this.gravity;
				this.vx += this.ax;
				this.vy += this.ay;
				this.vx *= 0.92;
				this.vy *= 0.92;
				this.y += this.vy;
				this.x += this.vx;
				this.life++;

				if (this.y > innerHeight / 2 && this.x < innerWidth / 2) {
					this.vx += 1;
				}

				if (this.y < innerHeight / 2 && this.x < innerWidth / 2) {
					this.vy += 1;
				}

				if (this.y > innerHeight / 2 && this.x > innerWidth / 2) {
					this.vy -= 1;
				}

				if (this.y < innerHeight / 2 && this.x > innerWidth / 2) {
					this.vx -= 1;
				}

				let deltaX = this.x - innerWidth / 2;
				let deltaY = this.y - innerHeight / 2;

				if (Math.sqrt(deltaX ** 2 + deltaY ** 2) < config.chaos) {
					this.fade -= 0.1;
					this.w -= 1;
					this.h -= 1;
				}
			};
		}
	}
</script>

<svelte:window bind:innerHeight bind:innerWidth />
<canvas bind:this={canvas} width={innerWidth} height={innerHeight} />

<style>
	canvas {
		position: fixed;
		top: 0;
		left: 0;
		outline: none;
		z-index: -999;
	}
</style>
