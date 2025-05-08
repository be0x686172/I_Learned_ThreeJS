export class MovementsPlayer {
    constructor(Player)
    {
        this.parent = Player;
    }

    movePlayer()
    {
        this.moveForward();
        this.moveRight();
    }

    moveForward()
    {
        if (this.parent.StatesPlayer.forwardMove)
        {
            const cameraDirection = this.parent.PlayerCamera.getDirection();

            this.parent.BodyPlayer.body.velocity.x = cameraDirection.x * this.parent.StatesPlayer.speedMove;
            this.parent.BodyPlayer.body.velocity.z = cameraDirection.z * this.parent.StatesPlayer.speedMove;
        }
        else if (this.parent.StatesPlayer.backwardMove)
        {
            const cameraDirection = this.parent.PlayerCamera.getDirection();

            this.parent.BodyPlayer.body.velocity.x = -cameraDirection.x * this.parent.StatesPlayer.speedMove;
            this.parent.BodyPlayer.body.velocity.z = -cameraDirection.z * this.parent.StatesPlayer.speedMove;
        }
        else 
        {
            this.parent.BodyPlayer.body.velocity.x = 0;
            this.parent.BodyPlayer.body.velocity.z = 0;
        }
    }

    moveRight()
    {
        if (this.parent.StatesPlayer.rightMove)
        {
            const cameraDirection = this.parent.PlayerCamera.getDirection();
            const cameraDirectionRightSide = this.parent.PlayerCamera.getDirectionRightSide();

            this.parent.BodyPlayer.body.velocity.x += -cameraDirectionRightSide.x * this.parent.StatesPlayer.speedMove;
            this.parent.BodyPlayer.body.velocity.z += -cameraDirectionRightSide.z * this.parent.StatesPlayer.speedMove;
        }
        else if (this.parent.StatesPlayer.leftMove)
        {
            const cameraDirection = this.parent.PlayerCamera.getDirection();
            const cameraDirectionRightSide = this.parent.PlayerCamera.getDirectionRightSide();

            this.parent.BodyPlayer.body.velocity.x += cameraDirectionRightSide.x * this.parent.StatesPlayer.speedMove;
            this.parent.BodyPlayer.body.velocity.z += cameraDirectionRightSide.z * this.parent.StatesPlayer.speedMove;
        }
    }

    update()
    {
        this.movePlayer();
    }
}