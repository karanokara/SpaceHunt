

// when DOM loaded, call this
window.onload = function () {

    /**
     * when click the start btn, start loading game
     */
    document.querySelectorAll( '.game-start-btn' )[0].onclick = function () {
        let setupPage = document.querySelectorAll( '.setup-game' )[0];

        // initial the game object according to the setting
        initGame();

        setupPage.attributes.class.value += ' hide';
    };

};

/**
 * Inital game, using default setting or user defined setting or default setting
 */
function initGame () {

    // 1st check if in user defined mode
    if ( window.gameData != undefined ) {

        window.oldSpice = new Ship(
            window.gameData.shipX,
            window.gameData.shipY,
            window.gameData.shipEnergy,
            window.gameData.shipSupplies,
            window.gameData.shipCredit,
            1,
            false,
            window.gameData.shipNormalPlay
        );

        window.gameMap = new GameMap( window.gameData.mapSize );
    }
    else if ( JSON.parse( localStorage.getItem( "oldSpice" ) ) != null ) {
        // 2nd Check for Persistent State
        //pull oldSpice state from local storage on load if tab closed

        //window.gameMap = new GameMap( 128 );
        //window.oldSpice = JSON.parse( localStorage.getItem( "oldSpice" ) );
    }
    else { // 3rd By default
        window.gameMap = new GameMap( 128 );
        window.oldSpice = new Ship( 0, 0, 1000, 100, 1000, 1, false, true );
    }

    // setup wormhole
    window.boundary = new WormHole();
    //DEBUG console.log(window.oldSpice);
    //DEBUG console.log(window.gmaeMap);

    // setup the game
    // var data = setup();

    // setup game effect
    gameEffect();

    // render map
    window.gameMap.renderMap( window.oldSpice.x, window.oldSpice.y );

    // update screen data
    updateHeading();
    updateLevels();

    //createGrid();
    PopulateMap( window.gameMap );
    //grid_items = document.getElementById('grid-container').childNodes;

    //important that pushes to tickObjects happens nearly last
    //ctrecipe.tickObjects.push( function () { DrawGameMap(grid_items); } );
    ctrecipe.tickObjects.push( function () { Collision( window.oldSpice.x, window.oldSpice.y ); } );
    ctrecipe.tick();
    //DrawGameMap(grid_items);
}

//function for storing state upon tab close
window.onclose = function () {
    //store state to local storage
    //localStorage.setItem( "oldSpice", JSON.stringify( window.oldSpice ) );        // error here
    //localStorage.setItem( "gameMap", JSON.stringify( window.GameMap ) );
};

/**
 * setup the game
 */
function gameEffect () {

    /**
     * When click the sensor scan button
     */
    document.querySelector( '#sensor-scan' ).onclick = function () {
        window.oldSpice.scan();
    }
}

/**
 * A function to fill obj data into gazetteer
 */
function gazePopulate ( obj, objX, objY ) {
    var gazeList = document.querySelector( '#gazetteer .gazetteer-list' );
    gazeList.innerHTML +=
        '<li class="list-group-item d-flex justify-content-between align-items-center">' +
        '<span class="gazetteer-obj-name">' + obj + '</span>' +
        '<span class="badge badge-primary badge-pill gazetteer-obj-coordinate">(' + objX + ', ' + objY + ')</span>' +
        '</li>';

}