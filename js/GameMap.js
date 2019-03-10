/*
Class to hold map information.
Structured as two dimensional array.
Class methods to add or check the contents of map.
*/

class GameMap {

    /*
    Construct a new Map object.
    Initializes 2D array to hold CelestialObjects.
    */
    constructor( size ) {
        this.size = size;
        this.map = new Array( size );
        for ( var i = 0; i < size; ++i ) {      // 0 ~ 127, 128 elements
            this.map[i] = new Array( size );
        }
    }

    /*
    Method to add a new CelestialObject to the map.
    Takes a CelestialObject and coordinate pair as arguments.
    Returns false if another object exists at the same location.
    Returns true if the object is successfully added to the map.
    */
    add ( object, x, y ) {
        let max = this.map.length;
        if ( x >= max || y >= max || x < 0 || y < 0 ) return false;
        if ( this.contents( x, y ) ) return false;
        this.map[x][y] = object;

        // add obj to the map
        // just add a class name now
        document.querySelector( '#c' + x + '-' + y + ' .map-obj' ).className += ' ' + object.objType;

        return true;
    }

    /*
    Delete reference to object at position x, y 
    in the map if it exists and return true.
    If location is empty, returns false.
    */
    remove ( x, y ) {
        if ( this.hasObject( x, y ) ) {
            delete this.map[x][y];

            // remove obj to the map, just revert back to a simple CP now
            document.querySelector( '#c' + x + '-' + y + ' .map-obj' ).className = 'map-obj';
            return true;
        }
        return false;
    }

    /*
    Return the contents of the map at location (x, y).
    If location is empty, returns null.
    */
    contents ( x, y ) {
        let max = this.map.length;
        if ( x >= max || y >= max || x < 0 || y < 0 ) return null;
        return this.map[x][y];
    }

    /*
    Return true if there is an object at location (x, y).
    If location is empty, returns null.
    */
    hasObject ( x, y ) {
        let max = this.map.length;
        if ( x >= max || y >= max || x < 0 || y < 0 ) return false;
        return Boolean( this.map[x][y] );
    }

    /**
     * Render a Size x Size map
     */
    renderMap ( shipX, shipY ) {
        var outer = document.querySelector( '#map-wrapper' );

        this.mapContainer = document.createElement( 'table' );

        outer.appendChild( this.mapContainer );
        this.mapContainer.className = 'map-table table table-bordered';

        for ( var row = ( this.size - 1 ); row >= 0; --row ) {
            var mapRow = document.createElement( "tr" );
            mapRow.className = 'map-row';
            mapRow.setAttribute( 'id', 'row-' + row );
            for ( var col = 0; col < this.size; ++col ) {
                var mapCell = document.createElement( 'td' ),
                    mapObj = document.createElement( 'div' );
                mapCell.className = 'map-cell';
                mapCell.setAttribute( 'id', 'c' + col + '-' + row );
                mapObj.className = 'map-obj';
                mapCell.appendChild( mapObj );
                mapRow.appendChild( mapCell );

            }
            this.mapContainer.appendChild( mapRow );
        }

        if ( shipX != undefined ) {
            this.move( shipX, shipY, null, true );
        }
    }

    /**
     * move map according to ship move
     * 
     * @param {*} x - The new x coordinate of ship
     * @param {*} y - The new y coordinate of ship
     */
    move ( x, y, callB, noAnimate ) {
        if ( !this.mapCellSize ) {
            this.mapCellSize = document.querySelector( '#c0-0' ).offsetWidth;
        }

        var targetX = -1 * x * this.mapCellSize,
            targetY = 1 * y * this.mapCellSize;

        if ( noAnimate || noAnimate == 1 ) { // without animate
            this.mapContainer.style.transition = 'none'
        }
        else {
            this.mapContainer.style.transition = ''
        }

        this.mapContainer.style.transform = 'translate(' + targetX + 'px,' + targetY + 'px)';

        if ( typeof callB == 'function' ) {
            setTimeout( () => {
                callB();
            }, 1000 );
        }
    }

    /**
     * Check if there is ONLY "Asteroid" on the way of ship to the terminating point
     * return false if there is no asteroid
     * return asteroid coordinate as the new CP point of ship
     * 
     * @param {*} startX 
     * @param {*} startY 
     * @param {*} endX 
     * @param {*} endY 
     */
    checkAsteroidOnWay ( startX, startY, endX, endY ) {
        var checkX = ( startX == endX ) ? 0 : 1;

        if ( checkX ) {
            if ( startX > endX ) {  // move left
                for ( var i = ( startX - 1 ); i > endX; --i ) {
                    if ( this.hasObject( i, startY ) && this.contents( i, startY ).objType === 'Asteroid' ) {
                        return { x: i, y: startY };
                    }
                }
            }
            else {  // move right
                for ( var i = ( startX + 1 ); i < endX; ++i ) {
                    if ( this.hasObject( i, startY ) && this.contents( i, startY ).objType === 'Asteroid' ) {
                        return { x: i, y: startY };
                    }
                }
            }
        }
        else {  // check Y
            if ( startY > endY ) {  // move down
                for ( var i = ( startY - 1 ); i > endY; --i ) {
                    if ( this.hasObject( startX, i ) && this.contents( startX, i ).objType === 'Asteroid' ) {
                        return { x: startX, y: i };
                    }
                }
            }
            else {  // move up
                for ( var i = ( startY + 1 ); i < endY; ++i ) {
                    if ( this.hasObject( startX, i ) && this.contents( startX, i ).objType === 'Asteroid' ) {
                        return { x: startX, y: i };
                    }
                }
            }
        }

        return false;
    }
}