export class SceneManager {
    constructor(Game)
    {
        this.parent = Game;
        this.currentScene = null;
    }

    setScene(scene)
    {
        this.currentScene = scene;
    }

    updateScene(renderer, camera)
    {
        renderer.render(this.currentScene, camera);
    }
}