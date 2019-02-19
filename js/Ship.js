/**
 * A class for the ship "OldSpice"
 */

class Ship {

    constructor( xi, yi, energy, supplies, credit, engineLv, isDamaged ) {
        this.x = xi;
        this.y = yi;
        this.energy = energy;
        this.supplies = supplies;
        this.credit = credit;
        this.engineLv = engineLv;         // Lv 1 ~ 3
        this.isDamaged = isDamaged;
        this.normalPlay = true;
        this.sensor = new Sensor( this, window.map );
        this.messageBoard = document.querySelectorAll( "#message-board" )[0];
    }

    /**
     * Ship movement function
     * @param {int} distance 
     * @param {int} degrees 
     */
    move ( distance, degrees ) {
        let radians = degrees * ( Math.PI / 180 );
        this.x += Math.round( distance * Math.cos( radians ) );
        this.y += Math.round( distance * Math.sin( radians ) );
        
        let mapSize = window.map.size;
        if (this.x >= mapSize || this.y >= mapSize || this.x < 0 || this.y < 0)
            window.boundary.Collide();

        // the move cost energy regardless of the outcome of the destination, do this every time.
        this.supplies -= 2;

        switch ( this.engineLv ) {
            case 1:
                this.energy -= ( this.isDamaged ) ? 50 * distance : 10 * distance;
                break;
            case 2:
                this.energy -= ( this.isDamaged ) ? 25 * distance : 5 * distance;
                break;
            case 3:
                this.energy -= ( this.isDamaged ) ? 5 * distance : distance;
                break;
        }

        if ( this.energy <= 0 && this.normalPlay) {
            gameObj.GameOver();
        }
        else if ( this.supplies <= 0 && this.normalPlay) {
            gameObj.GameOver();
        }
    }

    /**
     * Called after a move to update info to the screen
     */
    updateShipInfo () {
        document.querySelectorAll( ".credit-value" )[0].innerHTML = this.credit;
        document.querySelectorAll( ".energy-value" )[0].innerHTML = this.energy;
        document.querySelectorAll( ".supply-value" )[0].innerHTML = this.supplies;
    }

    /**
     * Sensor Scan
     */
    scan () {
        this.sensor.deploy();
        this.updateShipInfo();
    }

    /**
     * return String of the engine
     */
    getEngine () {
        switch ( this.engineLv ) {
            case 1:
                return "basic";
            case 2:
                return "DeNiro";
            case 3:
                return "Mucho-DeNiro";
            default:
                return "No Engine";
        }
    }

    /**
     * call to fix the engine
     */
    fixEngine () {
        if ( this.isDamaged ) {

        }
        else {
            this.messageBoard.innerHTML = "Ship is healthy!";
        }
    }

    //Returns a string with the resource lacking or return “OK” if the levels are not empty
    checkLevels () {
        if ( this.credits < 1 ) {
            return "No more Credits!";
        }
        else if ( this.energy < 1 && normalPlay ) {
            return "No more Energy...Game Over!";
        }
        else if ( this.supplies < 1 && normalPlay ) {
            return "No more Supplies...Game Over!";
        }
        else {
            return "OK";
        }
    }

    logLevels () {
        console.log( "Energy = " + this.energy + "; Supplies = " + this.supplies + "; Credits = " + this.credits + "Normal Play = " + this.normalPlay );
    }
}