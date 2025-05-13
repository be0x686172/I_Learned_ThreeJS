import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FreeArenaMap } from '../../maps/FreeAreneMap';
import { FreeArenaLight } from '../../lights/FreeArenaLight';
import { Player } from '../../entities/player/Player';

export class FreeArenaScene {
    constructor()
    {   
        // Créer la scène
        this.createScene();

        // Créer le loader pour les modèles 3D
        this.loader = new GLTFLoader();

        // Créer la map
        this.FreeArenaMap = new FreeArenaMap(this);

        // Créer les lumières de la map
        this.FreeArenaLight = new FreeArenaLight(this);

        // Créer le joueur
        this.Player = new Player(this);
    }

    createScene()
    {
        this.scene = new THREE.Scene();
        
        this.scene.name = "Free Arena";
        this.scene.background = new THREE.Color().setHex(0x73a7d9);
    }

    update(deltaTime)
    {
        // Mettre à jour la caméra dans CameraManager
        this.CameraManager.setCamera(this.currentCamera);
        
        // Mettre à jour la map et le monde physique
        this.FreeArenaMap.update(deltaTime);

        // Mettre à jour le joueur
        if (this.Player)
        {
            this.Player.update(deltaTime);
        }
    }
}