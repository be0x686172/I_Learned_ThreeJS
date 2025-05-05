import { PlayerCamera } from "../../cameras/PlayerCamera";
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { BodyPlayer } from "./components/BodyPlayer";

export class Player {
    constructor(scene)
    {
        this.parent = scene;
        this.BodyPlayer = new BodyPlayer(this);
        this.PlayerCamera = new PlayerCamera(this);
        this.PointerLockControls = new PointerLockControls(this.PlayerCamera.camera, document.querySelector('canvas'));

        // Mettre à jour la caméra dans CameraManager
        this.parent.currentCamera = this.PlayerCamera.camera;

        // Bloquer le pointeur pour permettre au joueur de contrôler la caméra
        document.addEventListener('click', () => {
            this.PointerLockControls.lock();
        })
    }
    
    update()
    {
        this.PlayerCamera.update();
    }
} 