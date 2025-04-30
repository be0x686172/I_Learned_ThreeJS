import * as THREE from 'three';
import { FreeArenaSceneMap } from "./map/FreeAreneSceneMap";

export class FreeArenaScene {
    constructor()
    {
        this.THREE = THREE;

        this.createScene();
        new FreeArenaSceneMap(this).createSceneMap();
    }

    createScene()
    {
        this.scene = new this.THREE.Scene();

        this.scene.name = "Arène libre";
        this.scene.background = new this.THREE.Color().setHex(0x73a7d9);
    }
}