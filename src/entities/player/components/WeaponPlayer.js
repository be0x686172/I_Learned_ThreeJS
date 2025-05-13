import { Glock } from "../../weapons/glock/Glock";

export class WeaponPlayer {
    constructor(Player)
    {
        this.parent = Player;
        this.currentWeapon = new Glock(this);
    }

    shoot()
    {
        if (this.parent.StatesPlayer.isShooting && this.currentWeapon.bullets > 0)
        {
            const now = performance.now();

            // Cooldown
            if (now - this.currentWeapon.lastShotTime >= this.currentWeapon.fireRate)
            {
                // Jouer l'animation
                this.currentWeapon.playAnimation('Armature|Shoot')

                // Retirer une balle du chargeur
                this.currentWeapon.bullets -= 1;

                this.currentWeapon.lastShotTime = now;
            }

            this.parent.StatesPlayer.isShooting = false;
        }
    }

    update(deltaTime)
    {
        this.shoot();
        
        if (this.currentWeapon.mixer)
        {
            this.currentWeapon.update(deltaTime);
        }
    }
}