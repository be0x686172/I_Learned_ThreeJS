import * as THREE from 'three';

export class Renderer {
    constructor()
    {
        this.renderer = new THREE.WebGLRenderer();

        // La taille du renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        // L'ajouter au DOM
        document.body.appendChild(this.renderer.domElement);
    }
}