export class FreeArenaSceneMap {
    constructor(FreeArenaScene)
    {
        this.parent = FreeArenaScene;
    }

    createSceneMap()
    {
        this.createSceneMapVisual();
    }

    createSceneMapVisual()
    {
        this.geometry = new this.parent.THREE.PlaneGeometry(10, 10);
        this.material = new this.parent.THREE.MeshBasicMaterial({ color: 0xffffff });
        this.mesh = new this.parent.THREE.Mesh(this.geometry, this.material); 

        this.mesh.rotation.x = -Math.PI / 2;

        this.parent.scene.add(this.mesh);
    }
}