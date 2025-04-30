export class SceneManager {
    constructor()
    {
        this.currentScene = null;
    }

    setScene(scene)
    {
        this.currentScene = scene;
    }

    updateScene(renderer, camera)
    {
        renderer.render(this.currentScene.scene, camera);
    }
}