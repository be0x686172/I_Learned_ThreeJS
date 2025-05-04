import * as THREE from 'three';
import { FreeArenaMap } from '../../maps/FreeAreneMap';
import { FreeArenaSceneCamera } from '../../cameras/FreeArenaSceneCamera';
import { Player } from '../../entities/player/Player';

export class FreeArenaScene {
    constructor()
    {   
        // Créer la scène
        this.createScene();
        
        // Créer la map
        this.FreeArenaMap = new FreeArenaMap(this).createSceneMap();
        
        // Créer la caméra de la scène
        this.Camera = new FreeArenaSceneCamera(); 

        // La caméra actuelle de la scène
        this.currentSceneCamera = this.Camera.camera;

        setTimeout(() => {

            // Créer le joueur
            this.Player = new Player(this);

        }, 3000)
    }

    createScene()
    {
        this.scene = new THREE.Scene();
        
        this.scene.name = "Arène libre";
        this.scene.background = new THREE.Color().setHex(0x73a7d9);
    }

    update()
    {
        // Mettre à jour la caméra dans CameraManager
        this.CameraManager.setCamera(this.currentSceneCamera);
    }
}