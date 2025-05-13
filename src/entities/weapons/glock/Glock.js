import * as THREE from 'three';

export class Glock {
    constructor(WeaponPlayer)
    {
        this.parent = WeaponPlayer;
        this.loader = this.parent.parent.parent.loader;
        this.playerCamera = this.parent.parent.PlayerCamera.camera;
        this.scene = this.parent.parent.parent.scene;

        // Les animations
        this.mixer = null;
        this.animations = {};
        this.currentAnimation = null;

        // Propriétés de l'arme
        this.currentAmmo = 5;
        this.reserveAmmo = 10;
        this.magazineSize = 5;
        this.fireRate = 320;
        this.lastShotTime = 0;

        this.loadWeaponModel();
    }

    loadWeaponModel()
    {
        this.loader.load('../../../../../public/models/weapons/glock.glb', (gltf) => {
            this.weapon = gltf.scene;

            this.weapon.position.set(-0.3, -0.65, -1.05);
            this.weapon.rotation.set(0, Math.PI / 2, 0);
            this.weapon.scale.set(0.22, 0.22, 0.22);

            this.playerCamera.add(this.weapon);
            this.scene.add(this.playerCamera);
            
            this.mixer = new THREE.AnimationMixer(this.weapon);
        
            gltf.animations.forEach((clip) => {
                this.animations[clip.name] = this.mixer.clipAction(clip);
            })

            this.currentAnimation = this.animations['Armature|Idle'].play();
            this.currentAnimation.play();
        });
    }

    playAnimation(name, repetition = THREE.LoopOnce)
    {
        const animation = this.animations[name];

        animation.reset();
        animation.play();
        animation.setLoop(repetition)
        animation.clampWhenFinished = true;
    }

    update(deltaTime)
    {
        this.mixer.update(deltaTime);
    }
}