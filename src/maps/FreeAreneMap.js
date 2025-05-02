import * as THREE from 'three';

export class FreeArenaMap {
    constructor(FreeArenaScene)
    {
        this.parent = FreeArenaScene;
    }

    createSceneMap()
    {
        this.createSceneMapVisual();
    }

    createSceneMapVisual()
    {
        this.geometry = new THREE.PlaneGeometry(10, 10);
        this.material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        this.mesh = new THREE.Mesh(this.geometry, this.material); 

        this.mesh.rotation.x = -Math.PI / 2;

        this.parent.scene.add(this.mesh);
    }
}