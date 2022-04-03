import * as THREE from 'three';
import Camera from '../Utils/Camera';
import Sizes from "../Utils/Sizes";
import Time from "../Utils/Time";
import Renderer from './Renderer';
import World from './World';

export default class Experience {
    self = this;
    constructor(canvas) {
        console.log("Here starting experience", canvas);

        //Singlenton
        if (!Experience._instance) {
            Experience._instance = this;
        } else {
            return Experience._instance;
        }

        this.canvas = canvas;

        this.sizes = new Sizes();
        this.scene = new THREE.Scene();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.world = new World();
        this.time = new Time();

        this.scene.add(new THREE.AxesHelper(8));

        // animation stopped at initialization
        //this.stopAnimation();

        this.sizes.on("resize", this.resizeHandler.bind(this));
        this.time.on("animation", this.update.bind(this));

        window.experience = this;
        window.vectorExample = new THREE.Vector2();
    }

    resizeHandler(ev) {
        //console.log("resize handler ", ev);
        if (ev && ev.currentTarget) {
            this.width = ev.currentTarget.innerWidth;
            this.height = ev.currentTarget.innerHeight;
            this.pixelRatio = Math.min(ev.currentTarget.devicePixelRatio, 2);
        } else {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.pixelRatio = Math.min(window.devicePixelRatio, 2);
            //console.warn("Sizes resizeHandler: not ev detected", window);
        }
        this.resize();
        this.update();
    }

    stopAnimation() {
        Time.animationStopped = true;
    }

    update() {
        this.camera.update();
        this.renderer.update();
    }

    resize() {
        this.camera.resize();
        this.renderer.resize();
    }

    static getInstance() {
        return this._instance;
    }

}