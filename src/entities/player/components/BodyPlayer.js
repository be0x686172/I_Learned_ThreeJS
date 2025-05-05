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
            shape: new CANNON.Sphere(1.5),
            position: new CANNON.Vec3(0, 5, 0)
        });

        this.body.name = 'Corps du joueur'

        this.parent.parent.FreeArenaMap.world.addBody(this.body);
    }
}