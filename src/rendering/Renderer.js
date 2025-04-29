export class Renderer {
    constructor(Game)
    {
        this.parent = Game;
        this.renderer = new this.parent.THREE.WebGLRenderer();

        // La taille du renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        // L'ajouter au DOM
        document.body.appendChild(this.renderer.domElement);
    }
}