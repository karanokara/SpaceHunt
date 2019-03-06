const nameInput = document.querySelector( '#playerName' );
MAX_CELEST_OBJ = 20;
window.gameData = {
    setupMode: false,
    shipX: 0,
    shipY: 0,
    shipEnergy: 1000,
    shipSupplies: 100,
    shipCredit: 1000,
    shipEngineLv: 1,
    shipDamaged: false,
    shipNormalPlay: 1,
    mapSize: 128,
    celeron: null,
    xeon: null,
    ryzen: null,
    stationTRM: new Array(MAX_CELEST_OBJ),
    stationTR: new Array(MAX_CELEST_OBJ),
    stationTM: new Array(MAX_CELEST_OBJ),
    stationT: new Array(MAX_CELEST_OBJ),
    abFreighter: new Array(MAX_CELEST_OBJ),
    asteroid: new Array(MAX_CELEST_OBJ),
    meteorShower: new Array(MAX_CELEST_OBJ)
};


// when DOM loaded, call this
window.onload = function () {
    // had to move datalog from PopulateMap.js as Continue Game doesn't call populate a fresh map.
    dataLog = document.getElementById( 'data-log' ).childNodes;
    console.log( dataLog );



    /**
     * when click the start btn, start loading game
     */
    let setupPage = document.querySelectorAll( '.setup-game' )[0];

    // initializes default values
    document.querySelectorAll( '.game-start-btn' )[0].onclick = function () {
        // initial the game object according to the setting
        //localStorage.removeItem( nameInput.value );
        initGame();
        setupPage.attributes.class.value += ' hide';
    };


    // loads saved game data for oldSpice and gameMap
    document.querySelectorAll( '.game-cont-btn' )[0].onclick = function () {

       if(contGame())
            setupPage.attributes.class.value += ' hide';
    };

};

/**
 * Continues last saved game, using localstorage to load oldSpice location and data members
 * as well as loads the map the player was playing on.
 */
function contGame () {
    let start = false;
    let temp = JSON.parse(localStorage.getItem(nameInput.value));


    //pull oldSpice state from local storage on load if tab closed
    // call the constructor with pertinent data (not map size)
    if ( temp != undefined ) {
        start = true;

        window.oldSpice = new Ship(
            temp.shipX,
            temp.shipY,
            temp.shipEnergy,
            temp.shipSupplies,
            temp.shipCredit,
            temp.shipEngineLv,
            temp.shipDamaged,
            temp.shipNormalPlay
        );


        // make an empty map with correct dimensions
        window.gameMap = new GameMap(temp.mapSize);

        // setup wormhole
        window.boundary = new WormHole();

        // setup game effect
        gameEffect();

        // render map
        window.gameMap.renderMap(window.oldSpice.x, window.oldSpice.y);

        // place map object from local storage into the empty map
        PopulateSavedMap(window.gameMap, temp);


        // update screen data
        updateHeading();
        updateLevels();


        //important that pushes to tickObjects happens nearly last
        //ctrecipe.tickObjects.push( function () { DrawGameMap(grid_items); } );
        ctrecipe.tickObjects.push(function () {
            Collision(window.oldSpice.x, window.oldSpice.y);
        });
        ctrecipe.tick();
    } else
        alert("No previous game has been saved.")

    return start;

}


/**
 * Inital game, using default setting or user defined setting or default setting
 */
function initGame () {

    // 1st check if in user defined mode
    if ( window.gameData != undefined ) {

        window.gameMap = new GameMap( window.gameData.mapSize );

        window.oldSpice = new Ship(
            window.gameData.shipX,
            window.gameData.shipY,
            window.gameData.shipEnergy,
            window.gameData.shipSupplies,
            window.gameData.shipCredit,
            window.gameData.shipEngineLv,
            window.gameData.shipDamaged,
            window.gameData.shipNormalPlay
        );

    } else { // By default
        window.gameMap = new GameMap( 128 );
        window.oldSpice = new Ship( 0, 0, 1000, 100, 1000, 1, false, true );
    }

    // setup wormhole
    window.boundary = new WormHole();
    //DEBUG console.log(window.oldSpice);
    //DEBUG console.log(window.gameMap);

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
    //document.querySelectorAll( '.setup-game' )[0].attributes.class.value += ' hide';
}

//function for storing state upon tab close
window.beforeunload = function () {
    // update Ship properties and store in local storage
    //localStorage.removeItem( nameInput.value );
    localStorage.setItem( "playerName", nameInput.value );
    saveShip(window.gameData, window.oldSpice);
    localStorage.setItem( nameInput.value, JSON.stringify( window.gameData ) );
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

    /**
     * when click the game save button
     */
    document.querySelector( '#game-save' ).onclick = function () {

        // store the player's name
        localStorage.setItem( "playerName", nameInput.value );
        //store the ship's data
        saveShip(window.gameData, window.oldSpice);
        // the map is being saved at the time it is being populated
        //saveMap(window.gameData, window.gameMap )

        localStorage.setItem( nameInput.value, JSON.stringify(window.gameData) );
        alert( "saved game!" );
    };
}

/**
 * A function to fill obj data into gazetteer
 */
function gazePopulate ( obj, objX, objY ) {
    var gazeList = document.querySelector( '#gazetteer .gazetteer-list' ),
        objName = ( obj.name != undefined ) ? obj.name : obj.objType;
    gazeList.innerHTML +=
        '<li class="list-group-item d-flex justify-content-between align-items-center">' +
        '<span class="gazetteer-obj-name">' + objName + '</span>' +
        '<span class="badge badge-primary badge-pill gazetteer-obj-coordinate">(' + objX + ', ' + objY + ')</span>' +
        '</li>';

}