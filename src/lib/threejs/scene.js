import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { mode } from '$app/env';


const scrollingPositions = {
    scrollY: 0,
    scrollX: 0,
    startPosition: 17,
};
const windowSizes = {
    height: 0,
    with: 0,
}

const humanModelSettings = {
    materialColor: '#385df0',
    wireframe: false,
};

const directionaLightSettings = {
    x: -41.3497, y: 5.7669, z: 8.3845,
}

let renderer,
    controls,
    humaGroup = new THREE.Group(),
    clock = new THREE.Clock(),
    guiContainer,
    directionaLight,
    guiActive;


const scene = new THREE.Scene();

scene.add(humaGroup);

const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 1000);
camera.position.y = 20;
camera.position.z = 10;

function addMeshes() {
    const geometry = new THREE.BoxGeometry();
    const boxMesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
        color: "red",
    }));

    scene.add(boxMesh);
}

function addModel() {
    const loader = new GLTFLoader();

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('threejs/draco/');
    loader.setDRACOLoader(dracoLoader);

    loader.load('threejs/models/human.glb',
        function (model) {
            //console.log(model);
            //scene.add(model.scene)
            humaGroup.add(model.scene);
            window.human = model.scene;
            model.scene.children[0].material.color.set("#385df0");
            addGui(null, model.scene);
        },
        function (xhr) {
            //console.log((xhr.loaded / xhr.total * 100) + "% loaded");
        },
        function (error) {
            //console.log("Error loading object: ", error);
        }
    );
}

const axesHelper = new THREE.AxesHelper(8);
scene.add(axesHelper);

export const updateSizes = function (sizes) {
    windowSizes.height = sizes.height;
    windowSizes.with = sizes.width;
    renderer.setSize(sizes.width, sizes.height, false);
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
}

export const scolling = function (scrollY) {
    scrollingPositions.scrollY = scrollY;
    const elapsedTime = clock.getElapsedTime();
    humaGroup.rotateY(Math.sin(elapsedTime) * 0.01);

    scrollingPositions.scrollX = window.scrollX;
}
//window.camera = camera;



function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    camera.position.y = -  scrollingPositions.scrollY * 0.005 + scrollingPositions.startPosition;

    //humaGroup.rotateY(elapsedTime * Math.PI);
    renderer.render(scene, camera);
}

function addLights() {
    directionaLight = new THREE.DirectionalLight({ color: "#fafa00", intensity: 10 });
    directionaLight.position.set(directionaLightSettings.x, directionaLightSettings.y, directionaLightSettings.z);
    scene.add(directionaLight);
}

function addGui(container, model) {

    if (model) {
        const gui = new GUI({ container: guiContainer });
        gui.add(model.children[0].material, 'wireframe');
        gui.addColor(humanModelSettings, 'materialColor').onChange(() => {
            model.children[0].material.color.set(humanModelSettings.materialColor);
        });
        const lightFolder = gui.addFolder('DirectionalLight');
        lightFolder.add(directionaLightSettings, 'x').min(-100).max(100).step(0.0001).onChange(() => {
            directionaLight.position.x = directionaLightSettings.x;
        });
        lightFolder.add(directionaLightSettings, 'y').min(-100).max(100).step(0.0001).onChange(() => {
            directionaLight.position.y = directionaLightSettings.y;
        });
        lightFolder.add(directionaLightSettings, 'z').min(-100).max(100).step(0.0001).onChange(() => {
            directionaLight.position.z = directionaLightSettings.z;
        });

    }

    if (container) {
        guiContainer = container;
    }
}

export const init = function (el, guiContainer) {
    //addMeshes();
    addLights();
    addModel();
    renderer = new THREE.WebGLRenderer({ canvas: el, antialias: true });
    updateSizes({ width: el.width, height: el.height });
    addGui(guiContainer);
    animate();
}