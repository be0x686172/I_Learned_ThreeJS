import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FreeArenaMap } from '../../maps/FreeAreneMap';
import { FreeArenaLight } from '../../lights/FreeArenaLight';
import { Player } from '../../entities/player/Player';

export class FreeArenaScene {
    constructor()
    {   
        this.createScene();
        this.loader = new GLTFLoader();
        this.FreeArenaMap = new FreeArenaMap(this);
        this.FreeArenaLight = new FreeArenaLight(this);
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
        this.CameraManager.setCamera(this.currentCamera);
        
        this.FreeArenaMap.update(deltaTime);

        if (this.Player)
        {
            this.Player.update(deltaTime);
        }
    }
}