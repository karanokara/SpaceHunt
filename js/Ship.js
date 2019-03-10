/**
 * A class for the ship "OldSpice"
 */

class Ship {

    constructor( xi, yi, energy, supplies, credit, engineLv, isDamaged, normalPlay ) {
        this.x = xi;
        this.y = yi;
        this.energy = energy;
        this.supplies = supplies;
        this.credit = credit;
        this.engineLv = engineLv;         // Lv 1 ~ 3
        this.isDamaged = isDamaged;
        this.normalPlay = normalPlay;
        this.recipe = false;
        this.sensor = new Sensor( this, window.gameMap );
        this.sensorDOM = document.querySelector( '#sensor' );
        this.shipIcon = document.querySelector( '.old-spice' );
        this.shipWrapper = document.querySelector( '#ship-wrapper' );
        this.messageBoard = document.querySelectorAll( "#message-board" )[0];
    }

    /**
     * Ship movement function
     * @param {int} distance 
     * @param {int} degrees 
     */
    move ( distance, degrees ) {
        let radians = degrees * ( Math.PI / 180 ),
            mapSize = window.gameMap.size,
            oldX = this.x,
            oldY = this.y,
            midwayAsteroid;

        this.x += Math.round( distance * Math.cos( radians ) );
        this.y += Math.round( distance * Math.sin( radians ) );

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

        // check if there is Asteroid on midway, then stop the ship there (update ship X Y)
        midwayAsteroid = window.gameMap.checkAsteroidOnWay( oldX, oldY, this.x, this.y );
        if ( midwayAsteroid ) {
            this.x = midwayAsteroid.x;
            this.y = midwayAsteroid.y;
        }

        // update screen new heading and levels before checking game ove or collision
        // so user can see current status before game over
        updateHeading();
        updateLevels();

        this.updateShipHeading( degrees );
        window.gameMap.move( this.x, this.y );


        // let the ship move first, 
        // then check boundary (jumping for wormhole), gameover, pop out object event, ....
        setTimeout( function () {
            if ( ( window.oldSpice.energy <= 0 && window.oldSpice.normalPlay ) ) {
                gameObj.GameOver( "Your ship has run out of energy and is now adrift in deep space!" );
            }
            else if ( window.oldSpice.supplies <= 0 && window.oldSpice.normalPlay ) {
                gameObj.GameOver( "Your crew has run out of supplies and have turned to cannibalism!" );
            }
            else if ( window.oldSpice.x >= mapSize || window.oldSpice.y >= mapSize || window.oldSpice.x < 0 || window.oldSpice.y < 0 ) {
                window.boundary.Collide();
                updateHeading();
                updateLevels();
                window.oldSpice.hide();
                setTimeout( () => {
                    window.gameMap.move( window.oldSpice.x, window.oldSpice.y, ( ( s ) => {
                        return () => { s.show(); };
                    } )( window.oldSpice ) );
                }, 200 );
            }

            // check out any objects events
            if ( !gameObj.isGameover ) {
                ctrecipe.tick();
                updateHeading();
                updateLevels();
            }
        }, 1000 );

    }

    /**
     * hide the ship
     */
    hide () {
        this.shipWrapper.className += ' hidden';
    }

    /**
     * show the ship
     */
    show () {
        this.shipWrapper.className = 'ship-wrapper';
    }

    /**
     * Update the direction of ship icon
     * @param {} degree 
     */
    updateShipHeading ( degree ) {
        this.shipIcon.className = this.shipIcon.className.replace( /(deg)(.*)/i, 'deg' + degree );
    }

    /**
     * Sensor Scan
     */
    scan () {
        var scanScale = ( this.sensor.level == 1 ) ? 5 : 11;
        this.sensorDOM.style.transform = 'scale(' + scanScale + ',' + scanScale + ')';
        setTimeout( ( ( s ) => {
            return () => { s.sensorDOM.style.transform = ''; };
        } )( this ), 290 );

        setTimeout( ( ( s ) => {
            return () => {
                s.sensor.deploy();
            };
        } )( this ), 500 );

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
            this.isDamaged = false;
            this.messageBoard.innerHTML = "All damages have been repaired!";
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