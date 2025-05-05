export class CameraManager {
    constructor()
    {
        this.currentCamera = null;
    }

    setCamera(camera)
    {
        this.currentCamera = camera;
    }
}