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
        if ( this.contents( x, y ) ) return false;
        this.map[x][y] = object;
        return true;
    }
    /*
    Return the contents of the map at location (x, y).
    If location is empty, returns null.
    */
    contents ( x, y ) {
        return this.map[x][y];
    }

    /*
    Return true if there is an object at location (x, y).
    If location is empty, returns null.
    */
    hasObject ( x, y ) {
        return Boolean( this.map[x][y] );
    }
}