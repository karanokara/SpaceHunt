// Size of map can be configure from setup file later
window.map = new GameMap( 128 );
window.oldSpice = new Ship( 0, 0, 1000, 100, 1000, 1, false );

// when DOM loaded, call this
window.onload = function () {

    //pull oldSpice state from local storage on load if tab closed
    if ( JSON.parse( localStorage.getItem( "oldSpice" ) ) != null )
        window.oldSpice = JSON.parse( localStorage.getItem( "oldSpice" ) );
    else
        window.oldSpice = new Ship( 0, 0, 1000, 100, 1000, 1, false );

    //DEBUG console.log(window.oldSpice);
    //DEBUG console.log(window.map);

    // setup the game
    // var data = setup();

    gameSetup();
    createGrid();

    //important that pushes to tickObjects happens nearly last
    ctrecipe.tickObjects.push( function () { Collision( window.oldSpice.x, window.oldSpice.y ); } );
    ctrecipe.tick();

};

//function for storing state upon tab close
window.onclose = function () {
    //store state to local storage
    localStorage.setItem( "oldSpice", JSON.stringify( window.oldSpice ) );
    localStorage.setItem( "gameMap", JSON.stringify( window.GameMap ) );
};

/**
 * setup the game
 */
function gameSetup () {
    /**
     * when click the start btn
     */
    document.querySelectorAll( '.game-start-btn' )[0].onclick = function () {
        let setupPage = document.querySelectorAll( '.setup-game' )[0];
        setupPage.attributes.class.value += ' hide';
    };


    /**
     * When click the sensor scan button
     */
    document.querySelector( '#sensor-scan' ).onclick = function () {
        window.oldSpice.scan();
    }
}