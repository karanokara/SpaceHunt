


// Size of map can be configure from setup file later
window.gameMap = new GameMap( 128 );


// when DOM loaded, call this
window.onload = function () {

    // set the ship obj as global
    window.ship = new Ship( 0, 0, 1000, 100, 1000, 1, false );
    updateHeading();















}