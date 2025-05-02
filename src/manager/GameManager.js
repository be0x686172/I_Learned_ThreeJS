import { SceneManager } from "./SceneManager";
import { Renderer } from '../rendering/Renderer';

// Importer la scène par défaut du lancement du jeu
import { FreeArenaScene } from '../scenes/freeArenaScene/FreeArenaScene';

export class GameManager {
    constructor()
    {
        this.SceneManager = new SceneManager();
        this.Renderer = new Renderer();

        // Définir la scène (le mode) par défaut du lancement du jeu
        this.SceneManager.setScene(new FreeArenaScene()); 

        // Mettre à jour le jeu
        this.animate();
    }

    animate()
    {
        requestAnimationFrame(this.animate.bind(this));
        
        // Mettre à jour les scènes
        this.SceneManager.updateScene(this.Renderer.renderer, this.SceneManager.currentScene.Camera.camera);     
    }
}