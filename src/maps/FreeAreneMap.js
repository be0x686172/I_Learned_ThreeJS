import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export class FreeArenaMap {
    constructor(FreeArenaScene)
    {
        this.parent = FreeArenaScene;

        this.createSceneMap();
    }

    createSceneMap()
    {
        this.createSceneMapWorld();
        this.createSceneMapVisual();
        this.createSceneMapPhysic();
    }

    createSceneMapWorld()
    {
        this.world = new CANNON.World();

        this.world.gravity.set(0, -9.82, 0);
    }

    createSceneMapVisual()
    {
        this.geometry = new THREE.PlaneGeometry(10, 10);
        this.material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        this.mesh = new THREE.Mesh(this.geometry, this.material); 

        this.mesh.rotation.x = -Math.PI / 2;

        this.parent.scene.add(this.mesh);
    }

    createSceneMapPhysic()
    {
        this.body = new CANNON.Body({ mass: 0, shape: new CANNON.Plane() });

        this.body.quaternion.setFromEuler(-Math.PI / 2, 0, 0);

        this.world.addBody(this.body);
    }

    update(deltaTime)
    {
        // Mettre à jour le monde physique
        this.world.step(1 / 60, deltaTime, 3);
    }
}