export class StatesPlayer {
    constructor(Player)
    {   
        this.parent = Player;

        this.speedMove = 500;
        this.forwardMove = false;
        this.backwardMove = false;
        this.rightMove = false;
        this.leftMove = false;

        this.isShooting = false;
        this.isReloading = false;
    }
}