// Size of map can be configure from setup file later
window.map = new GameMap( 128 );
window.oldSpice = new Ship( 0, 0, 1000, 100, 1000, 1, false );
window.boundary = new WormHole();

const nameInput = document.querySelector('#playerName');



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
    PopulateMap(window.map);
    grid_items = document.getElementById('grid-container').childNodes;

    //important that pushes to tickObjects happens nearly last
    ctrecipe.tickObjects.push( function () { DrawGameMap(grid_items); } );
    ctrecipe.tickObjects.push( function () { Collision( window.oldSpice.x, window.oldSpice.y ); } );
    ctrecipe.tick();
    DrawGameMap(grid_items);

};

//function for storing state upon tab close
window.onclose = function () {
    //store state to local storage
    localStorage.setItem( "oldSpice", JSON.stringify( window.oldSpice ) );
    localStorage.setItem( "gameMap",  JSON.stringify( window.GameMap  ) );


    //Testing persistent state with name
    if(typeof(Storage) != "undefined")
        localStorage.setItem('name', nameInput.value);

};

/**
 * setup the game
 */
function gameSetup () {

    /**
     * when click the start btn
     */
    document.querySelectorAll( '.game-start-btn' )[0].onclick = function () {
        updateHeading();
        updateLevels();

        let setupPage = document.querySelectorAll( '.setup-game' )[0];
        setupPage.attributes.class.value += ' hide';
        //Testing persistent state with name
        if(typeof(Storage) != "undefined")
            localStorage.setItem('name', nameInput.value);
    };


    /**
     * When click the sensor scan button
     */
    document.querySelector( '#sensor-scan' ).onclick = function () {
        window.oldSpice.scan();
    }
}