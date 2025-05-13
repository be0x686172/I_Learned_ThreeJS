export class ControlsPlayer {
    constructor(Player)
    {
        this.parent = Player;

        this.createControls();
    }

    createControls()
    {
        this.createControlsMove();
        this.createControlShoot();
        this.createControlReload();
    }

    createControlsMove()
    {
        document.addEventListener('keydown', (e) => {
            switch (e.key)
            {
                case 'z':
                    this.parent.StatesPlayer.forwardMove = true;
                    break; 
                case 's':
                    this.parent.StatesPlayer.backwardMove = true;
                    break; 
                case 'd':
                    this.parent.StatesPlayer.rightMove = true;
                    break; 
                case 'a':
                    this.parent.StatesPlayer.leftMove = true;  
                    break;   
                default:
                    break;
            }
        });
    
        document.addEventListener('keyup', (e) => {
            switch (e.key)
            {
                case 'z':
                    this.parent.StatesPlayer.forwardMove = false;
                    break; 
                case 's':
                    this.parent.StatesPlayer.backwardMove = false;
                    break; 
                case 'd':
                    this.parent.StatesPlayer.rightMove = false;
                    break; 
                case 'a':
                    this.parent.StatesPlayer.leftMove = false;   
                    break;  
                default:
                    break;
            }
        });
    }

    createControlShoot()
    {
        document.addEventListener('mouseup', (e) => {
            if (e.button == 0)
            {
                this.parent.StatesPlayer.isShooting = true;
            }
        })
    }

    createControlReload()
    {
        document.addEventListener('keyup', (e) => {
            if (e.key == 'r')
            {
                this.parent.StatesPlayer.isReloading = true;
            }
        })
    }
}