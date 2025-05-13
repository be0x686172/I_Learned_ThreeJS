import { Glock } from "../../weapons/glock/Glock";

export class WeaponPlayer {
    constructor(Player)
    {
        this.parent = Player;
        this.currentWeapon = new Glock(this);
    }

    shoot()
    {
        if (this.parent.StatesPlayer.isShooting && this.currentWeapon.currentAmmo > 0)
        {
            const now = performance.now();

            // Cooldown
            if (now - this.currentWeapon.lastShotTime >= this.currentWeapon.fireRate)
            {
                this.currentWeapon.playAnimation('Armature|Shoot')
                this.currentWeapon.currentAmmo -= 1;
                this.currentWeapon.lastShotTime = now;
            }

            this.parent.StatesPlayer.isShooting = false;
        }
    }

    reload()
    {
        if (this.parent.StatesPlayer.isReloading)
        {
            if (this.currentWeapon.currentAmmo != this.currentWeapon.magazineSize)
            {
                // Jouer l'animation
                this.currentWeapon.playAnimation('Armature|Reload');

                // Système de rechargement
                const missingBullets = this.currentWeapon.magazineSize - this.currentWeapon.currentAmmo;
                console.log('Après : ' + this.currentWeapon.currentAmmo + ' / 5');
                this.currentWeapon.currentAmmo = this.currentWeapon.currentAmmo + this.missingBullets;
                console.log('Après : ' + this.currentWeapon.currentAmmo + ' / 5');
            }

            this.parent.StatesPlayer.isReloading = false;
        }
    }

    update(deltaTime)
    {
        this.shoot();
        this.reload();
        
        if (this.currentWeapon.mixer)
        {
            this.currentWeapon.update(deltaTime);
        }
    }
}