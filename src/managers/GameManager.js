import { SceneManager } from "./SceneManager";
import { CameraManager }  from './CameraManager';
import { Renderer } from '../rendering/Renderer';
import threeWindowResize from "three-window-resize";
import Stats from "three/examples/jsm/libs/stats.module.js";

// Importer la scène par défaut du lancement du jeu
import { FreeArenaScene } from '../scenes/freeArenaScene/FreeArenaScene';

export class GameManager {
    constructor()
    {
        this.lastTime = performance.now();

        // Activer le compteur FPS
        this.stats = new Stats();
        document.body.appendChild(this.stats.dom);

        this.SceneManager = new SceneManager();
        this.CameraManager = new CameraManager();
        this.Renderer = new Renderer();

        // Définir la scène (le mode) par défaut du lancement du jeu
        this.SceneManager.setScene(new FreeArenaScene()); 
        
        this.animate();
    }

    animate()
    {
        this.stats.begin();

        requestAnimationFrame(this.animate.bind(this));

        this.currentTime = performance.now();
        this.deltaTime = (this.currentTime - this.lastTime) / 1000;
        this.lastTime = this.currentTime;

        // Si une scène (un mode) existe alors
        if (this.SceneManager.currentScene)
        {
            // Envoyer le CameraManager à la scène (au mode) actuelle
            this.SceneManager.currentScene.CameraManager = this.CameraManager;
            
            // Mettre à jour la scène actuelle pour tous les évènements
            this.SceneManager.currentScene.update(this.deltaTime);
            
            // Mettre à jour le rendu de la scène actuelle
            this.SceneManager.updateScene(this.Renderer.renderer, this.CameraManager.currentCamera);
        }    
        
        // Window Resize
        if (this.CameraManager.currentCamera)
        {
            new threeWindowResize(this.Renderer.renderer, this.CameraManager.currentCamera);
        }

        this.stats.end();
    }
}