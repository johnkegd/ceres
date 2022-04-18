import * as THREE from 'three';
import Experience from "../Experience"
import { GeometryDefaultGui } from '@johnkegd/utils';

export default class Geometries {
    constructor() {
        this.experience = Experience.getInstance();
        this.material = new THREE.MeshToonMaterial({ color: "#ffeded" });
        this.debug = this.experience.debug;
        this.distanceBetween = 4;

        this.addTorus();
        this.addCone();
        this.addKnout();

        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder("Geometries");
            this.initGuis(this.torus, this.debugFolder);
        }
    }

    addTorus() {
        this.torusSettings = {
            color: "#ffeded",
            radius: 1,
            tube: 0.4,
            radialSegments: 16,
            tubularSegments: 60,
        };

        const torus = new THREE.Mesh(new THREE.TorusGeometry(
            this.torusSettings.radius,
            this.torusSettings.tube,
            this.torusSettings.radialSegments,
            this.torusSettings.tubularSegments,
        ), this.material);

        this.torus = torus;
        this.torus.position.x = -this.distanceBetween * 0;
        this.experience.scene.add(torus);
    }

    addCone() {
        this.coneSettings = {
            radius: 1,
            height: 2,
            radialSegments: 32,
        };
        const cone = new THREE.Mesh(new THREE.ConeGeometry(
            this.coneSettings.radius,
            this.coneSettings.height,
            this.coneSettings.radialSegments), this.material);
        this.cone = cone;
        this.cone.position.x = -this.distanceBetween * 1;
        this.experience.scene.add(cone);
    }

    addKnout() {
        this.knoutSettings = {
            radius: 0.8,
            tube: 0.35,
            radialSegments: 100,
            tubularSegments: 16,
        }
        const knout = new THREE.Mesh(new THREE.TorusKnotGeometry(), this.material);
        this.knout = knout;
        this.knout.position.x = this.distanceBetween * 1;
        this.experience.scene.add(knout);
    }

    initGuis() {
        this.debugFolder.addColor(this.torusSettings, "color").onChange(() => {
            this.material.color.set(this.torusSettings.color);
        });

        const torusDebug = this.debugFolder.addFolder("Torus");
        const coneDebug = this.debugFolder.addFolder("Cone");
        const knoutDebug = this.debugFolder.addFolder("Knout");


        GeometryDefaultGui.addGui(this.torus, torusDebug);
        GeometryDefaultGui.addGui(this.cone, coneDebug);
        GeometryDefaultGui.addGui(this.knout, knoutDebug);
    }
}