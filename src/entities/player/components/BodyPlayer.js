import * as CANNON from 'cannon-es';

export class BodyPlayer {
    constructor(Player)
    {
        this.parent = Player;

        this.createBodyPlayer();
    }

    createBodyPlayer()
    {
        this.body = new CANNON.Body({
            mass: 1,
            shape: new CANNON.Sphere(3),
            position: new CANNON.Vec3(0, 5, 0)
        });

        this.body.name = 'Body Player'

        this.parent.parent.FreeArenaMap.world.addBody(this.body);
    }
}