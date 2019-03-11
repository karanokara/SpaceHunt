/**
 * A class for sensor system of "OldSpice"
 *
 * @version 1.0
 */


class Sensor {

    constructor( ship, map ) {
        this.ship = ship;
        this.map = map;
        this.level = 1;             // sensor level
        this.ScanCP = 2;
    }

    /**
     * To identify celestial artifact (planets, asteroids, space stations)
     * 
     * called by user manually
     */
    deploy () {
        this.ship.supplies -= 2;        // take 1 turn, consume 2% of supplies
        var nearCP = [],                  // an array of near cp coordinates
            count = 0,
            scale = 2 * this.ScanCP + 1,
            xx = this.ship.x - this.ScanCP,
            yy = this.ship.y - this.ScanCP,
            cx = 0,
            cy = 0,
            anyFound = 0,
            found = this.map.map[this.ship.x][this.ship.y];

        while ( cy < scale && yy <= 127 ) {
            if ( yy >= 0 ) {
                while ( cx < scale && xx <= 127 ) {
                    if ( xx >= 0 ) {
                        //if ( !( xx == this.ship.x && yy == this.ship.y ) ) {
                        nearCP[count++] = {
                            x: xx,
                            y: yy
                        };
                        //}
                    }
                    ++xx;
                    ++cx
                }
                cx = 0;
            }
            xx = this.ship.x - this.ScanCP;
            ++yy;
            ++cy
        }

        // Search the map to find object within those coordinates
        // output message of searching result to the data log
        for ( var j = 0; j < nearCP.length; ++j ) {
            var searchX = nearCP[j].x,
                searchY = nearCP[j].y,
                duplicate = false;
            found = this.map.map[searchX][searchY];

            if ( found !== undefined ) {
                anyFound = 1;

                for ( let k = 3; k < window.gameData.gaze.length; ++k ) {
                    if ( window.gameData.gaze[k].x === searchX && searchY === window.gameData.gaze[k].y ) {
                        if ( found.objType === "Planet" )
                            addMessage( "Planet " + found.name + " at (" + searchX + ", " + searchY + ") " + " already in gazetteer" );
                        else
                            addMessage( found.objType + " at (" + searchX + ", " + searchY + ") " + "already in gazetteer" );
                        duplicate = true;
                        break;
                    }
                }
                if ( !duplicate ) {


                    if ( found.objType === "Planet" )
                        addMessage( "Planet " + found.name + " found at (" + searchX + ", " + searchY + ")" );
                    else
                        addMessage( found.objType + " found at (" + searchX + ", " + searchY + ")" );

                    // add location of celestial obj found to Celestial Gazetteer
                    gazePopulate( found, searchX, searchY, true );
                }
            }
        }

        if ( !anyFound ) {
            addMessage( "There is nothing found in the current CP!" );
        }

        return nearCP;
    }

    /**
     * sensor upgrade, can only upgrade once from the requirement
     */
    upgrade () {
        if ( this.level == 1 && this.ship.credit > 100 ) {
            this.ship.credit -= 100;
            this.level = 2;
            this.ScanCP = 5;
        }
        else {
            addMessage( "Can't upgrade sensor, check your sensor's lv or your credit" );
        }
    }

    /**
     * Alert detection of recipe when entering planet's orbit
     * 
     * called by mvoement of entering a planet's orbit 
     */
    alert () {
        //TODO: determine if recepit in this plant
        addMessage( "The KocaKola recipe is in this planet!" );
    }

    /**
     * print sensor's detail to the message board
     */
    getInfo () {
        if ( this.level == 1 ) {
            return 'Standard - 2 CP';
        }
        else {
            return 'Enhanced - 5 CP';
        }
    }

}

