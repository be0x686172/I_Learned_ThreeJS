import { PlayerCamera } from "../../cameras/PlayerCamera";
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { BodyPlayer } from "./components/BodyPlayer";
import { StatesPlayer } from "./components/StatesPlayer";
import { ControlsPlayer } from "./components/ControlsPlayer";
import { MovementsPlayer } from "./components/MovementsPlayer";

export class Player {
    constructor(scene)
    {
        this.parent = scene;
        this.PlayerCamera = new PlayerCamera(this);
        this.PointerLockControls = new PointerLockControls(this.PlayerCamera.camera, document.querySelector('canvas'));
        this.BodyPlayer = new BodyPlayer(this);
        this.StatesPlayer = new StatesPlayer(this);
        this.ControlsPlayer = new ControlsPlayer(this);
        this.MovementsPlayer = new MovementsPlayer(this);

        // Mettre à jour la caméra dans CameraManager
        this.parent.currentCamera = this.PlayerCamera.camera;

        // Bloquer le pointeur pour permettre au joueur de contrôler la caméra
        document.addEventListener('click', () => {
            this.PointerLockControls.lock();
        })
    }
    
    update(deltaTime)
    {
        this.PlayerCamera.update();
        this.MovementsPlayer.update(deltaTime);
    }
} 