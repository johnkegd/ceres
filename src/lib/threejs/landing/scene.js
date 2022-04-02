import * as THREE from 'three';
import * as dat from 'lil-gui';
import { init } from 'svelte/internal';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
scene.add(camera);

const gui = new dat.GUI();
scene.add(gui);

let windowSizes = { width: 0, height: 0 };


const renderer = new THREE.WebGLRenderer({ canvas: null });
renderer.setSize(windowSizes.width, windowSizes.height);

function animation(timeStamp) {

    window.requestAnimationFrame(animation);

    camera.updateProjectionMatrix();
    renderer.render(scene, camera);

}


export const PLAIN = function () {
    let self = this;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    this.gui = new dat.GUI();
    this.windowSizes = { width: 0, height: 0 };

    this.scene.add(this.camera, this.gui);

    this.init = function (canvas, guiContainer) {
        self.windowSizes.width = canvas.width;
        self.windowSizes.height = canvas.height;

        self.renderer = new THREE.WebGLRenderer({
            canvas: canvas
        });
        self.renderer.setSize(this.windowSizes.width, this.windowSizes.height);
    }

    this.animation = function (timeStamp) {
        window.requestAnimationFrame(this.animation);

    }

}