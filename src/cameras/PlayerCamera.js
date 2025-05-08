import * as THREE from 'three';

export class PlayerCamera {
    constructor(Player)
    {
        this.parent = Player;
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        
        this.camera.name = "Caméra du joueur";
        this.camera.position.set(0, 1, 0);
    }

    getDirection()
    {
        const cameraDirection = this.camera.getWorldDirection(new THREE.Vector3(0, 0, 0));
        return cameraDirection;
    }

    getDirectionRightSide()
    {
        const cameraDirection = this.camera.getWorldDirection(new THREE.Vector3(0, 0, 0));
        const cameraDirectionRightSide = new THREE.Vector3();

        // Produit vectoriel 
        cameraDirectionRightSide.crossVectors(new THREE.Vector3(0, 1, 0), cameraDirection);

        return cameraDirectionRightSide;
    }

    update()
    {
        this.camera.position.copy(this.parent.BodyPlayer.body.position);
    }
}