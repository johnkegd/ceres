import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Fox from './Fox.js'
import Geometries from './Geometries.js';

export default class World {
    constructor() {
        this.experience = Experience.getInstance();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        // Wait for resources
        this.resources.on('ready', () => {
            // Setup
            this.floor = new Floor();
            this.geometries = new Geometries();
            //this.fox = new Fox();
            this.environment = new Environment();
        })
    }

    update() {
        if (this.fox)
            this.fox.update();
    }
}