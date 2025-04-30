import { SceneManager } from "./SceneManager";
import { Renderer } from '../rendering/Renderer';
import { Camera } from '../rendering/Camera';
import threeWindowResize from 'three-window-resize';

// Importer la scène par défaut du lancement du jeu
import { FreeArenaScene } from '../scenes/freeArena/FreeArenaScene';

export class Game {
    constructor()
    {
        this.SceneManager = new SceneManager(this);
        this.Renderer = new Renderer(this);
        this.Camera = new Camera(this);

        // Définir la scène par défaut du lancement du jeu
        this.SceneManager.setScene(new FreeArenaScene());

        // autoResize
        new threeWindowResize(this.Renderer.renderer, this.Camera.camera);

        // Mettre à jour le jeu
        this.animate();
    }

    animate()
    {
        requestAnimationFrame(this.animate.bind(this));
        
        // Mettre à jour les scènes
        this.SceneManager.updateScene(this.Renderer.renderer, this.Camera.camera);
    }
}