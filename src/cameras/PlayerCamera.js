import * as THREE from 'three';

export class PlayerCamera {
    constructor(Player)
    {
        this.parent = Player;
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        
        this.camera.name = "Caméra du joueur";
        this.camera.position.set(0, 1, 0);
    }

    update()
    {
        this.camera.position.copy(this.parent.BodyPlayer.body.position);
    }
}