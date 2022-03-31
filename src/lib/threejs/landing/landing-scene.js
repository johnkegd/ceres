import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min';


const scene = new THREE.Scene();
const clock = new THREE.Clock();
let renderer, cameraSettings, perspectiveCamera, sizes = { width: 0, height: 0 }, gem, controls, mesh, mixer, previousTime = 0;


const lightsConfig = {
    x: 0,
    y: 0,
    z: 0,
    intensity: 0,
};

/* cameras */
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.z = 6;
scene.add(camera);

/* lights */
const firstDirectional = new THREE.DirectionalLight("#fafafa", 2);
const directionalDown = new THREE.DirectionalLight("red", 4);
const ambientLight = new THREE.AmbientLight("#fafafa", 2);


const lightHelper = new THREE.DirectionalLightHelper(directionalDown, 1);
scene.add(lightHelper);

firstDirectional.position.x = 0;
firstDirectional.position.y = 5;

directionalDown.position.x = 35;
directionalDown.position.y = 5;

scene.add(firstDirectional);
scene.add(directionalDown);
scene.add(ambientLight);

const axesHelper = new THREE.AxesHelper(8);
scene.add(axesHelper);


const planeMaterial = new THREE.MeshBasicMaterial({ color: "grey" });
const planeGeometry = new THREE.PlaneGeometry(30, 30);
const meshPlane = new THREE.Mesh(planeGeometry, planeMaterial);
//scene.add(meshPlane);


function addModels() {
    const glbLoader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("threejs/loaders/draco/");

    glbLoader.setDRACOLoader(dracoLoader);

    glbLoader.load("threejs/models/pru-animated.glb", function (model) {
        /*         camera = model.scene.children[0];
                perspectiveCamera = model.cameras[0];
                perspectiveCamera.position.y = -10;
        
                perspectiveCamera.position.y = 15;
                window.perspectiveCamera = perspectiveCamera;
                mesh = model.scene.children[1];
        
                mesh.material = new THREE.MeshStandardMaterial({ color: "grey" });
        
                mesh.roughness = 0.4;
                mesh.metalness = 1;
         */

        //model.scene.scale.set(0.025, 0.025, 0.025);
        window.mesh = mesh;
        window.model = model;
        window.scene = scene;

        scene.add(model.scene);

        mixer = new THREE.AnimationMixer(model.scene);
        const action = mixer.clipAction(model.animations[0]);
        action.play();

        /* 
        
                mixer = new THREE.AnimationMixer(perspectiveCamera);
                const action = mixer.clipAction(model.animations[0]);
                const cuboAction = mixer.clipAction(model.animations[1]);
        
                action.play();
                cuboAction.play();
        
                perspectiveCamera.aspect = sizes.width / sizes.height;
        
                scene.add(perspectiveCamera); */
        animation();

    });

}

function initGui(guiContainer) {
    if (guiContainer) {
        const gui = new GUI({ container: guiContainer });

        const lights = gui.addFolder("Lights");

        const firstDirLight = lights.addFolder("FirstDirectional");
        firstDirLight.add(lightsConfig, "x").min(-100).max(100).onChange(() => {
            firstDirectional.position.x = lightsConfig.x;
        });

        firstDirLight.add(lightsConfig, "y").min(-100).max(100).onChange(() => {
            firstDirectional.position.y = lightsConfig.y;
        })

        firstDirLight.add(lightsConfig, "z").min(-100).max(100).onChange(() => {
            firstDirectional.position.z = lightsConfig.z;
        });

        firstDirLight.add(lightsConfig, "intensity").min(0).max(10).onChange(() => {
            firstDirectional.intensity = lightsConfig.intensity;
        })
    }
}

function loadTextures(model) {
    const textureLoader = new THREE.TextureLoader()
    const texture = textureLoader.load("threejs/textures/rocks/aerial_rocks_04_diff_1k.jpg");

    model.material.map = texture;
}



/* mesh */
function addCustomMesh() {
    const textureLoader = new THREE.TextureLoader()
    const color = textureLoader.load("threejs/textures/rocks/aerial_rocks_04_diff_1k.jpg");
    const normalTexture = textureLoader.load("threejs/textures/rocks/normal.png");
    const roughnessTexture = textureLoader.load("threejs/textures/rocks/rough.png");
    const metalnessTexture = textureLoader.load("threejs/textures/rocks/metalness.png");
    const ambientOcclussionTexture = textureLoader.load("threejs/textures/rocks/ao.png")

    const material = new THREE.MeshStandardMaterial({
        map: color,
        normalMap: normalTexture,
        roughnessMap: roughnessTexture,
        metalnessMap: metalnessTexture,
    });
    material.aoMapIntensity = 1;
    const geometry = new THREE.SphereGeometry();
    const mesh = new THREE.Mesh(geometry, material);
    mesh.geometry.setAttribute("uv2", new THREE.BufferAttribute(mesh.geometry.attributes.uv.array, 2));
    material.aoMap = ambientOcclussionTexture;
    material.aoMapIntensity = 1;
    window.mesh = mesh;

    scene.add(mesh);
}

function animation() {
    if (controls) {
        controls.update();
    }


    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;

    if (mixer) {
        mixer.update(deltaTime);
    }

    if (mesh) {
        /* mesh.rotation.x = elapsedTime * 0.10;
        mesh.rotation.y = elapsedTime * 0.1; */
    }
    if (gem) {
        gem.rotation.z = elapsedTime;
    }
    requestAnimationFrame(animation);

    if (perspectiveCamera) {
        //perspectiveCamera.position.y += elapsedTime;
        renderer.render(scene, perspectiveCamera);
        perspectiveCamera.updateProjectionMatrix();
    } else if (camera) {
        renderer.render(scene, camera);
        camera.updateProjectionMatrix;
    }

}

export const resizeHandler = function (ev) {
    window.sizes = sizes;
    if (ev && ev.currentTarget) {
        sizes.width = ev.currentTarget.innerWidth;
        sizes.height = ev.currentTarget.innerHeight;
    }

    renderer.setSize(sizes.width, sizes.height);
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
}


export const landingScene = function (canvas, guiContainer) {
    sizes.width = canvas.width;
    sizes.height = canvas.height;

    renderer = new THREE.WebGLRenderer({ antialias: true, canvas, alpha: true });
    renderer.setSize(canvas.width, canvas.height);
    //renderer.setClearAlpha(0);
    initGui(guiContainer);
    addCustomMesh();
    //addModels();

    //camera.aspect = canvas.width / canvas.height;


    animation();
    //loadTextures(mesh);

}