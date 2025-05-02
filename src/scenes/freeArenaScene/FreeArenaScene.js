import * as THREE from 'three';
import { FreeArenaMap } from '../../maps/FreeAreneMap';
import { Player } from '../../entities/player/Player';

export class FreeArenaScene {
    constructor()
    {
        // Créer la scène
        this.createScene();
        
        // Créer la map
        this.FreeArenaMap = new FreeArenaMap(this).createSceneMap();

        // Créer le joueur
        this.Player = new Player(this);

        // Créer la caméra de la scène
        this.Camera = this.Player.Camera; 
    }

    createScene()
    {
        this.scene = new THREE.Scene();

        this.scene.name = "Arène libre";
        this.scene.background = new THREE.Color().setHex(0x73a7d9);
    }
}