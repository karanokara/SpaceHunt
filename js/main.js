const nameInput = document.querySelector('#playerName');
window.gameData = {
    shipX: 0,
    shipY: 0,
    shipEnergy: 1000,
    shipSupplies: 100,
    shipCredit: 1000,
    shipNormalPlay: 1,
    mapSize: 128,
};

window.gameDataTest = {
    shipX: 10,
    shipY: 10,
    shipEnergy: 100,
    shipSupplies: 10,
    shipCredit: 10,
    shipNormalPlay: 11,
    shipEngineLv: 1,
    shipDamaged: false,
    mapSize: 128,
};
// when DOM loaded, call this
window.onload = function () {

    /**
     * when click the start btn, start loading game
     */
    //let setupPage = document.querySelectorAll( '.setup-game' )[0];

    document.querySelectorAll( '.game-start-btn' )[0].onclick = function () {
        // initial the game object according to the setting
        initGame();
      //  setupPage.attributes.class.value += ' hide';
    };
    document.querySelectorAll( '.game-cont-btn' )[0].onclick = function () {
        // initial the game object according to the setting
        initGame();
       // setupPage.attributes.class.value += ' hide';
    };



};

/**
 * Inital game, using default setting or user defined setting or default setting
 */
function initGame () {

    // 1st check if in user defined mode
    if ( typeof(localStorage.getItem('game')) == "undefined") {

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
    if(typeof(Storage) != "undefined")
        localStorage.setItem("game", JSON.stringify(gameDataTest));


    //else if ( JSON.parse( localStorage.getItem( "oldSpice" ) ) != null ) {
    // 2nd Check for Persistent State
    //pull oldSpice state from local storage on load if tab closed
    if(typeof(Storage) != "undefined") {
        var temp = JSON.parse(localStorage.getItem('game'));
        window.oldSpice = new Ship(
            temp.shipX,
            temp.shipY,
            temp.shipEnergy,
            temp.shipSupplies,
            temp.shipCredit,
            temp.shipEngineLv,
            temp.shipDamaged,
            window.gameData.shipNormalPlay
        );
        window.gameMap = new GameMap( window.gameData.mapSize );
        localStorage.removeItem('game');
    }


    //window.gameMap = new GameMap( 128 );
    //window.oldSpice = JSON.parse( localStorage.getItem( "oldSpice" ) );
    //}
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
    document.querySelectorAll( '.setup-game' )[0].attributes.class.value += ' hide';
}

//function for storing state upon tab close
window.onclose = function () {
    //Testing persistent state with name
    localStorage.removeItem('game');
    localStorage.setItem("name", nameInput.value);
    window.gameData.shipX        = window.oldSpice.x;
    window.gameData.shipY        = window.oldSpice.y;
    window.gameData.shipEnergy   = window.oldSpice.energy;
    window.gameData.shipSupplies = window.oldSpice.supplies;
    window.gameData.shipCredit   = window.oldSpice.credit;
    window.gameData.shipEngineLv = window.oldSpice.engineLv;
    window.gameData.shipDamaged  = window.oldSpice.isDamaged;
    window.gameData.shipNormalPlay = window.oldSpice.normalPlay
    localStorage.setItem("game", JSON.stringify(gameData));
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
    var gazeList = document.querySelector( '#gazetteer .gazetteer-list' ),
        objName = ( obj.name != undefined ) ? obj.name : obj.objType;
    gazeList.innerHTML +=
        '<li class="list-group-item d-flex justify-content-between align-items-center">' +
        '<span class="gazetteer-obj-name">' + objName + '</span>' +
        '<span class="badge badge-primary badge-pill gazetteer-obj-coordinate">(' + objX + ', ' + objY + ')</span>' +
        '</li>';

}