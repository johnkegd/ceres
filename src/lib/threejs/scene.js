import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

const scrollingPositions = {
    scrollY: 0,
    scrollX: 0,
};
const windowSizes = {
    height: 0,
    with: 0,
}
window.scrolling = scrollingPositions;

let renderer, controls;
const scene = new THREE.Scene();
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
            console.log(model);
            scene.add(model.scene);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + "% loaded");
        },
        function (error) {
            console.log("Error loading object: ", error);
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

export const scolling = function () {
    scrollingPositions.scrollY = window.scrollY;
    scrollingPositions.scrollX = window.scrollX;
}
window.camera = camera;



function animate() {
    requestAnimationFrame(animate);

    camera.position.y = -  scrollingPositions.scrollY * 0.03 + 20;

    renderer.render(scene, camera);
}

function addLights() {
    const light = new THREE.DirectionalLight({ color: "#fafa00", intensity: 10 });
    light.position.x = 3;
    light.position.y = 12;
    light.position.z = 6;
    scene.add(light);
}

export const init = function (el, uiContainer) {
    addMeshes();
    addLights();
    addModel();
    renderer = new THREE.WebGLRenderer({ canvas: el, antialias: true });
    updateSizes({ width: el.width, height: el.height });
    animate();
}