import * as THREE from 'three';
import { FreeArenaSceneMap } from "./map/FreeAreneSceneMap";
import { Player } from '../../entities/player/Player';

export class FreeArenaScene {
    constructor()
    {
        // Créer la scène
        this.createScene();

        // Créer la map
        new FreeArenaSceneMap(this).createSceneMap();

        // Créer le joueur
        this.player = new Player();
    }

    createScene()
    {
        this.scene = new THREE.Scene();

        this.scene.name = "Arène libre";
        this.scene.background = new THREE.Color().setHex(0x73a7d9);
    }
}