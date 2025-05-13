import { Glock } from "../../weapons/glock/Glock";

export class WeaponPlayer {
    constructor(Player)
    {
        this.parent = Player;
        this.currentWeapon = new Glock(this);
    }
}