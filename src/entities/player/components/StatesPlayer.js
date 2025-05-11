export class StatesPlayer {
    constructor(Player)
    {   
        this.parent = Player;

        // Mouvement
        this.speedMove = 500;
        this.forwardMove = false;
        this.backwardMove = false;
        this.rightMove = false;
        this.leftMove = false;
    }
}