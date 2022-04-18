export default [
    {
        name: 'environmentMapTexture',
        type: 'cubeTexture',
        path:
            [
                'threejs/textures/environmentMap/px.jpg',
                'threejs/textures/environmentMap/nx.jpg',
                'threejs/textures/environmentMap/py.jpg',
                'threejs/textures/environmentMap/ny.jpg',
                'threejs/textures/environmentMap/pz.jpg',
                'threejs/textures/environmentMap/nz.jpg'
            ]
    },
    {
        name: 'grassColorTexture',
        type: 'texture',
        path: 'threejs/textures/dirt/color.jpg'
    },
    {
        name: 'grassNormalTexture',
        type: 'texture',
        path: 'threejs/textures/dirt/normal.jpg'
    },
    {
        name: 'foxModel',
        type: 'gltfModel',
        path: 'threejs/models/Fox/glTF/Fox.gltf'
    },
    {
        name: 'camera',
        type: 'gltfModel',
        path: 'threejs/cameras/camera.glb'
    }
]