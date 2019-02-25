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
        for ( var i = 0; i < size; ++i ) {
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
        return true;
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

        for ( var i = 0; i < this.size; ++i ) {
            var mapRow = document.createElement( "tr" );
            mapRow.className = 'map-row';
            mapRow.setAttribute( 'id', 'row-' + i );
            for ( var j = 0; j < this.size; ++j ) {
                var mapCell = document.createElement( 'td' );
                mapCell.className = 'map-cell';
                mapCell.setAttribute( 'id', 'c' + i + '-' + j );
                mapRow.appendChild( mapCell );

            }
            this.mapContainer.appendChild( mapRow );
        }

        if ( shipX != undefined ) {
            this.move( shipX, shipY );
        }
    }

    /**
     * move map according to ship move
     * 
     * @param {*} x - The new x coordinate of ship
     * @param {*} y - The new y coordinate of ship
     */
    move ( x, y ) {
        if ( !this.mapCellSize ) {
            this.mapCellSize = document.querySelector( '#c0-0' ).offsetWidth;
        }

        var targetX = -1 * x * this.mapCellSize,
            targetY = 1 * y * this.mapCellSize;

        this.mapContainer.style.transform = 'translate(' + targetX + 'px,' + targetY + 'px)';
    }
}