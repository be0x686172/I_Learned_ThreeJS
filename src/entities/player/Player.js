import { PlayerCamera } from "../../cameras/PlayerCamera";

export class Player {
    constructor(scene)
    {
        this.parent = scene;

        // Créer la caméra du joueur
        this.Camera = new PlayerCamera();
    }
}