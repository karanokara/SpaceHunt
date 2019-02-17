/**
 * A class for sensor system of "OldSpice"
 *
 * @version 1.0
 */


class Sensor {

    constructor(x,y) {
        this.level = 1;             // sensor level
        this.ScanCP = 2;
        this.currentCP = {
                x: x,
                y: y
            },
        this.messageBoard = document.querySelectorAll("#message-board")[0];
    }

    /**
     * To identify celestial artifact (planets, asteroids, space stations)
     * 
     * called by user manually
     */
    deploy () {
        window.oldSpice.supplies -= 2;        // take 1 turn, consume 2% of supplies
        var nearCP = [],                  // an array of near cp coordinates
            count = 0,
            scale = 2 * this.ScanCP + 1,
            xx = this.currentCP.x - this.ScanCP, 
            yy = this.currentCP.y - this.ScanCP,
            cx = 0,
            cy = 0;

        while (cy < scale && yy <= 127) {
            if(yy >= 0) {
                while (cx < scale && xx <= 127) {
                    if ( xx >= 0) {
                        if(!(xx == this.currentCP.x && yy == this.currentCP.y)) {
                            nearCP[count++] = {
                                x: xx,
                                y: yy
                            };
                        }
                    }
                    ++xx;
                    ++cx
                }
                cx = 0;
            }
            xx = this.currentCP.x - this.ScanCP;
            ++yy;
            ++cy
        }

        //TODO: Search the map to find object within those coordinates

        //TODO: add location of celestial obj found to Celestial Map

        return nearCP;
    }

    /**
     * sensor upgrade, can only upgrade once
     */
    upgrade () {
        if ( this.level == 1 && window.oldSpice.credit > 100 ) {
            window.oldSpice.credit -= 100;
            this.level = 2;
            this.ScanCP = 5;
        }
        else {
            this.messageBoard.innerHTML = "Can't upgrade sensor, check your sensor's lv or your credit";
        }
    }

    /**
     * Alert detection of recipe when entering planet's orbit
     * 
     * called by mvoement of entering a planet's orbit 
     */
    alert () {
        //TODO: determine if recepit in this plant
        this.messageBoard.innerHTML = "The KocaKola recipe is in this planet!";
    }

    /**
     * print sensor's detail to the message board
     */
    print () {
        if ( this.level == 1 ) {
            this.messageBoard.innerHTML = "Sensor: Standard, Scan within 2 CP";
        }
        else {
            this.messageBoard.innerHTML = "Sensor: Enhanced, Scan within 5 CP";
        }
    }

    /**
     * update current oldSpice CP for sensor 
     */
    update() {
        this.currentCP.x = window.oldSpice.x;
        this.currentCP.y = window.oldSpice.y;
    }
}

