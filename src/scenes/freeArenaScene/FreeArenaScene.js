import * as THREE from 'three';
import { FreeArenaMap } from '../../maps/FreeAreneMap';
import { Player } from '../../entities/player/Player';

export class FreeArenaScene {
    constructor()
    {   
        // Créer la scène
        this.createScene();
        
        // Créer la map
        this.FreeArenaMap = new FreeArenaMap(this);

        // Créer le joueur
        this.Player = new Player(this);
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
        this.CameraManager.setCamera(this.currentCamera);
        
        // Mettre à jour la map et le monde physique
        this.FreeArenaMap.update();

        // Mettre à jour le joueur
        if (this.Player)
        {
            this.Player.update();
        }
    }
}