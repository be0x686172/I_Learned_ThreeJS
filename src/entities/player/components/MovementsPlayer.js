import { deltaTime } from "three/tsl";

export class MovementsPlayer {
    constructor(Player)
    {
        this.parent = Player;
    }

    movePlayer(deltaTime)
    {
        this.moveForward(deltaTime);
        this.moveRight(deltaTime);
    }

    moveForward(deltaTime)
    {
        if (this.parent.StatesPlayer.forwardMove)
        {
            const cameraDirection = this.parent.PlayerCamera.getDirection();

            this.parent.BodyPlayer.body.velocity.x = cameraDirection.x * this.parent.StatesPlayer.speedMove * deltaTime;
            this.parent.BodyPlayer.body.velocity.z = cameraDirection.z * this.parent.StatesPlayer.speedMove * deltaTime;
        }
        else if (this.parent.StatesPlayer.backwardMove)
        {
            const cameraDirection = this.parent.PlayerCamera.getDirection();

            this.parent.BodyPlayer.body.velocity.x = -cameraDirection.x * this.parent.StatesPlayer.speedMove * deltaTime;
            this.parent.BodyPlayer.body.velocity.z = -cameraDirection.z * this.parent.StatesPlayer.speedMove * deltaTime;
        }
        else 
        {
            this.parent.BodyPlayer.body.velocity.x = 0;
            this.parent.BodyPlayer.body.velocity.z = 0;
        }
    }

    moveRight(deltaTime)
    {
        if (this.parent.StatesPlayer.rightMove)
        {
            const cameraDirection = this.parent.PlayerCamera.getDirection();
            const cameraDirectionRightSide = this.parent.PlayerCamera.getDirectionRightSide();

            this.parent.BodyPlayer.body.velocity.x += -cameraDirectionRightSide.x * this.parent.StatesPlayer.speedMove * deltaTime;
            this.parent.BodyPlayer.body.velocity.z += -cameraDirectionRightSide.z * this.parent.StatesPlayer.speedMove * deltaTime;
        }
        else if (this.parent.StatesPlayer.leftMove)
        {
            const cameraDirection = this.parent.PlayerCamera.getDirection();
            const cameraDirectionRightSide = this.parent.PlayerCamera.getDirectionRightSide();

            this.parent.BodyPlayer.body.velocity.x += cameraDirectionRightSide.x * this.parent.StatesPlayer.speedMove * deltaTime;
            this.parent.BodyPlayer.body.velocity.z += cameraDirectionRightSide.z * this.parent.StatesPlayer.speedMove * deltaTime;
        }
    }

    update(deltaTime)
    {
        this.movePlayer(deltaTime);
    }
}