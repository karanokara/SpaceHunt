const nameInput = document.querySelector( '#playerName' );
window.gameData = {
    shipX: 0,
    shipY: 0,
    shipEnergy: 1000,
    shipSupplies: 100,
    shipCredit: 1000,
    shipNormalPlay: 1,
    mapSize: 128,
    celeron: null,
    xeon: null,
    ryzen: null,
    stationTRM: new Array(20),
    stationTR: new Array(20),
    stationTM: new Array(20),
    stationT: new Array(20),
    abFreighter: new Array(20),
    asteroid: new Array(20),
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
        localStorage.removeItem( 'savedGame' );
        initGame();
        setupPage.attributes.class.value += ' hide';
    };


    // loads saved game data for oldSpice and gameMap
    document.querySelectorAll( '.game-cont-btn' )[0].onclick = function () {

        contGame();
        setupPage.attributes.class.value += ' hide';
    };

};

/**
 * Continues last saved game, using localstorage to load oldSpice location and data members
 * as well as loads the map the player was playing on.
 */
function contGame () {

    //pull oldSpice state from local storage on load if tab closed
    // call the constructor with pertinent data (not map size)
    let temp = JSON.parse( localStorage.getItem( 'savedGame' ) );
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


    window.gameMap = new GameMap( temp.mapSize );

    // setup wormhole
    window.boundary = new WormHole();

    // setup game effect
    gameEffect();

    // render map
    window.gameMap.renderMap( window.oldSpice.x, window.oldSpice.y );

    // populate saved map
    // load planets
    generateCeleron(gameMap, temp.celeron.x, temp.celeron.y);
    generateXeon(gameMap, temp.xeon.x, temp.xeon.y);
    generateRyzen(gameMap, temp.ryzen.x, temp.ryzen.y);



    // Celestial object are displaying in different order on the Gazetteer
    // due to the fact that when saving the map, it is read in order
    // when the gazetteer is initially populated it is being populated as the objects are randomly generated.


    // load celestial objects
    for(let i = 0; i < temp.asteroid.length; i += 2){
        if(temp.stationTRM[i])
            generateCelestialObjects(gameMap, 0, temp.stationTRM[i], temp.stationTRM[i+1]);
        if(temp.stationTR[i])
            generateCelestialObjects(gameMap, 1, temp.stationTR[i], temp.stationTR[i+1]);
        if(temp.stationTM[i])
            generateCelestialObjects(gameMap, 2, temp.stationTM[i], temp.stationTM[i+1]);
        if(temp.stationT[i])
            generateCelestialObjects(gameMap, 3, temp.stationT[i], temp.stationT[i+1]);
        if(temp.asteroid[i])
            generateCelestialObjects(gameMap, 4, temp.asteroid[i], temp.asteroid[i+1]);
        if(temp.abFreighter[i])
            generateCelestialObjects(gameMap, 5, temp.abFreighter[i], temp.abFreighter[i+1]);
    }

    // update screen data
    updateHeading();
    updateLevels();


    //important that pushes to tickObjects happens nearly last
    //ctrecipe.tickObjects.push( function () { DrawGameMap(grid_items); } );
    ctrecipe.tickObjects.push( function () { Collision( window.oldSpice.x, window.oldSpice.y ); } );
    ctrecipe.tick();
}


/**
 * Inital game, using default setting or user defined setting or default setting
 */
function initGame () {

    // 1st check if in user defined mode
    if ( window.gameData != undefined ) {
        //if ( window.gameData != undefined ) {

        window.gameMap = new GameMap( window.gameData.mapSize );

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
window.onclose = function () {
    //Testing persistent state with name
    localStorage.removeItem( 'savedGame' );
    localStorage.setItem( "name", nameInput.value );
    window.gameData.shipX = window.oldSpice.x;
    window.gameData.shipY = window.oldSpice.y;
    window.gameData.shipEnergy = window.oldSpice.energy;
    window.gameData.shipSupplies = window.oldSpice.supplies;
    window.gameData.shipCredit = window.oldSpice.credit;
    window.gameData.shipEngineLv = window.oldSpice.engineLv;
    window.gameData.shipDamaged = window.oldSpice.isDamaged;
    window.gameData.shipNormalPlay = window.oldSpice.normalPlay
    localStorage.setItem( "savedGame", JSON.stringify( gameData ) );
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

    /**
     * when click the game save button
     */
    document.querySelector( '#game-save' ).onclick = function () {

        alert( "saved game!" );

        //store the ship's data
        localStorage.setItem( "name", nameInput.value );

        saveShip(window.gameData, window.oldSpice)
        //saveMap(window.gameData, window.gameMap )

        localStorage.setItem( "savedGame", JSON.stringify(window.gameData) );
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