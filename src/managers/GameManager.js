import { SceneManager } from "./SceneManager";
import { CameraManager }  from './CameraManager';
import { Renderer } from '../rendering/Renderer';
import threeWindowResize from "three-window-resize";

// Importer la scène par défaut du lancement du jeu
import { FreeArenaScene } from '../scenes/freeArenaScene/FreeArenaScene';

export class GameManager {
    constructor()
    {
        this.SceneManager = new SceneManager();
        this.CameraManager = new CameraManager();
        this.Renderer = new Renderer();

        // Définir la scène (le mode) par défaut du lancement du jeu
        this.SceneManager.setScene(new FreeArenaScene()); 

        // Mettre à jour le jeu
        this.animate();
    }

    animate()
    {
        requestAnimationFrame(this.animate.bind(this));

        // Si une scène (un mode) existe alors
        if (this.SceneManager.currentScene)
        {
            // Envoyer le CameraManager à la scène (au mode) actuelle
            this.SceneManager.currentScene.CameraManager = this.CameraManager;
            
            // Mettre à jour la scène actuelle pour tous les évènements
            this.SceneManager.currentScene.update();
            
            // Mettre à jour le rendu de la scène actuelle
            this.SceneManager.updateScene(this.Renderer.renderer, this.CameraManager.currentCamera);
        }    
        
        // Window Resize
        if (this.CameraManager.currentCamera)
        {
            new threeWindowResize(this.Renderer.renderer, this.CameraManager.currentCamera);
        }
    }
}