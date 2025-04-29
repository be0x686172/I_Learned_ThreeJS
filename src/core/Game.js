import * as THREE from 'three';

import { SceneManager } from "./SceneManager";
import { Renderer } from '../rendering/Renderer';
import { Camera } from '../rendering/Camera';

export class Game {
    constructor()
    {
        this.THREE = THREE;

        this.SceneManager = new SceneManager(this);
        this.Renderer = new Renderer(this);
        this.Camera = new Camera(this);

        // Définir la scène par défaut du lancement du jeu

        // Mettre à jour le jeu
        this.animate();
    }

    animate()
    {
        requestAnimationFrame(this.animate.bind(this));

        // Mettre à jour les scènes
    }
}