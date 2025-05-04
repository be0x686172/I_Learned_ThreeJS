import * as THREE from 'three';

export class FreeArenaSceneCamera {
    constructor()
    {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        
        this.camera.name = "Caméra de l'arène libre";
        this.camera.position.set(0, 10, 5);
        this.camera.lookAt(0, 0, 0);
    }
}