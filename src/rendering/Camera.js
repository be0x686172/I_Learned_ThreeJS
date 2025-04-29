export class Camera {
    constructor(Game)
    {
        this.parent = Game;
        this.camera = new this.parent.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    }
}