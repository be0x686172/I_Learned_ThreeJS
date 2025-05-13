export class Glock {
    constructor(WeaponPlayer)
    {
        this.parent = WeaponPlayer;
        this.loader = this.parent.parent.parent.loader;
        this.playerCamera = this.parent.parent.PlayerCamera.camera;
        this.scene = this.parent.parent.parent.scene;

        this.loadGlockModel();
    }

    loadGlockModel()
    {
        this.loader.load('../../../../../public/models/weapons/glock.glb', (gltf) => {
            this.glock = gltf.scene;

            // Configuration
            this.glock.position.set(-0.3, -0.65, -1.05);
            this.glock.rotation.set(0, Math.PI / 2, 0);
            this.glock.scale.set(0.22, 0.22, 0.22);

            // L'ajouter en tant qu'enfant à la caméra du joueur
            this.playerCamera.add(this.glock);
            this.scene.add(this.playerCamera);
        });
    }
}