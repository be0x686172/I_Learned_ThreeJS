export class StatesPlayer {
    constructor(Player)
    {   
        this.parent = Player;

        // Mouvement
        this.speedMove = 5;
        this.forwardMove = false;
        this.backwardMove = false;
        this.rightMove = false;
        this.leftMove = false;
    }
}