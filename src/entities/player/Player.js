import { PlayerCamera } from "../../cameras/PlayerCamera";

export class Player {
    constructor(scene)
    {
        this.parent = scene;
        
        // Créer la caméra du joueur
        this.Camera = new PlayerCamera();

        // Mettre à jour la caméra dans CameraManager
        this.parent.currentSceneCamera = this.Camera.camera;
    }
}