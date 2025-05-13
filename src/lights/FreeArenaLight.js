import * as THREE from 'three';

export class FreeArenaLight {
    constructor(FreeArenaScene)
    {
        this.parent = FreeArenaScene;
        this.scene = this.parent.scene;

        this.createAmbientLight();
        this.createDirectionalLight();
    }

    // Lumière qui illumine uniformément tous les objets de la scène
    createAmbientLight()
    {
        this.light = new THREE.AmbientLight(0xffffff, 0.5);
        
        this.scene.add(this.light);
    }

    // Lumière comme le soleil
    createDirectionalLight()
    {
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        
        this.directionalLight.position.set(100, 100, 100);
        this.directionalLight.castShadow = true;
        
        this.scene.add(this.directionalLight);
    }
}