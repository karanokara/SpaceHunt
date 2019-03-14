//
const nameInput = document.querySelector( '#playerName' );

//object to store persistent game data
window.gameData = {
    savedGamed: false,
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
    eniac: null,
    badMax: new Array( 2 ),
    recipe: new Array( 2 ),
    stationTRM: [],
    stationTR: [],
    stationTM: [],
    stationT: [],
    abFreighter: [],
    asteroid: [],
    meteorShower: [],
    asteroidRandom: true,
    meteorRandom: true,
    freighterRandom: true,
    stationRandom: true,
    gaze: { length: 0 },
    msgs: []
};





//Main DOM function
window.onload = function () {

    populateSavedGameList();

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

        // if there is saved game, then you can continue
        if ( contGame() ) {
            setupPage.attributes.class.value += ' hide';
        }
    };

};

/**
 * Continues last saved game, using localstorage to load oldSpice location and data members
 * as well as loads the map the player was playing on.
 */
function contGame () {


    let name = nameInput.value;
    let temp = JSON.parse( localStorage.getItem( name ) );


    //pull oldSpice state from local storage on load if tab closed
    // call the constructor with pertinent data (not map size)
    if ( temp != undefined ) {

        // make an empty map with correct dimensions
        window.gameMap = new GameMap( temp.mapSize );

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

        // allows for the game to be saved when the browser is closed
        //window.gameData.savedGamed = temp.savedGamed;

        // setup wormhole
        window.boundary = new WormHole();

        // setup game effect
        gameEffect();

        // render map
        window.gameMap.renderMap( window.oldSpice.x, window.oldSpice.y );

        // place map object from local storage into the empty map
        PopulateSavedMap( window.gameMap, temp );

        console.log( temp );
        populateSavedGaze( temp.gaze );

        // update screen data
        updateHeading();
        updateLevels();
        populateMessageBoard( temp.msgs );


        //important that pushes to tickObjects happens nearly last
        //ctrecipe.tickObjects.push( function () { DrawGameMap(grid_items); } );
        ctrecipe.tickObjects.push( function () {
            Collision( window.oldSpice.x, window.oldSpice.y );
        } );
        ctrecipe.tick();

        return true;
    } else {
        if ( name )
            alert( "No previous game has been saved for " + name );
        else
            alert( "No player name was entered." );

        return false;
    }

}


/**
 * Inital game, using default setting or user defined setting or default setting
 */
function initGame () {


    // when they start a new game with the same name as a saved game we remove the old saved data.
    if ( localStorage.getItem( nameInput.value ) )
        alert( "By starting a new game, you will be deleted the last saved game for " + nameInput.value );
    localStorage.removeItem( nameInput.value );

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
/**
 * saves game when browser closes but there is not prompt, but it works this way!
 */

//function for storing state upon tab close
window.beforeunload = window.unload = window.onbeforeunload = function () {
    if ( window.gameData.savedGamed ) {
        // update Ship properties and store in local storage
        saveShip( window.gameData, window.oldSpice );
        localStorage.setItem( nameInput.value, JSON.stringify( window.gameData ) );
    }
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
    };

    /**
     * when click the game save button
     */
    //if ( !window.gameData.setupMode ) {
    document.querySelector( '#game-save' ).onclick = function () {
        // if user didn't enter name at the beginning, ask for it
        if ( nameInput.value == '' ) {
            var playerName = prompt( 'Please enter a player name: ', 'default' );
            if ( playerName ) {
                nameInput.value = playerName;
            }
        }
        if ( nameInput.value !== '' ) {

            window.gameData.savedGamed = true;

            //store the ship's data
            saveShip( window.gameData, window.oldSpice );
            // update BadMax's location if encountered and any removed abFreighters
            saveMap(window.gameData, window.gameMap )

            localStorage.setItem( nameInput.value, JSON.stringify( window.gameData ) );
            alert( "Game saved!\n Your progess will also be saved when you close the browser." );
        }
    };
    //}
}

/**
 * A function to fill obj data into gazetteer
 */
function gazePopulate ( obj, objX, objY, isToSave ) {
    if ( obj.addedToGaze == undefined ) {
        var gazeList = document.querySelector( '#gazetteer .gazetteer-list' ),
            gazeWrapper = document.querySelector( '#gazetteer-list-wrapper' ),
            objName = ( obj.name != undefined ) ? obj.name : obj.objType,
            objIndex = ( window.gameData.gaze.length++ );

        obj.addedToGaze = 1;
        gazeList.innerHTML +=
            '<li class="list-group-item d-flex justify-content-between align-items-center">' +
            '<span class="gazetteer-obj-name">' + objName + '</span>' +
            '<span class="badge badge-primary badge-pill gazetteer-obj-coordinate">(' + objX + ', ' + objY + ')</span>' +
            '</li>';

        gazeWrapper.scrollTo( 0, gazeList.offsetHeight );

        if ( isToSave == 1 || isToSave == true ) {
            // save list of obj to gameData for game save purpose
            window.gameData.gaze[objIndex] = { x: objX, y: objY };
        }
    }
}

/**
 * populate the saved gaze from saved data
 */
function populateSavedGaze ( gaze ) {
    for ( var i = 0; i < gaze.length; ++i ) {
        if ( gaze[i] != undefined ) {
            gazePopulate( window.gameMap.contents( gaze[i].x, gaze[i].y ), gaze[i].x, gaze[i].y, 1 );
        }
    }
}

/**
 *  saves the message board
 */
function saveMessageBoard ( newMessage ) {
    let msgIndex = window.gameData.msgs.length;
    window.gameData.msgs[msgIndex] = newMessage;
}

/**
 * populates the message board from the local storage
 */
function populateMessageBoard ( savedMessages ) {
    for ( const msg of savedMessages )
        addMessage( msg );
}

/**
 * generates the List of saved games
 */
function populateSavedGameList () {

    //playerNameInit();

    // only populate a list of saved games if there are any games to show.
    if ( localStorage.length > 0 ) {

        // creates the container to contain everything being created here.
        // kinda redundant since I already have a place holder in index.html but why not.
        let savedGameListTitleDIVContainer = document.createElement( "DIV" );
        savedGameListTitleDIVContainer.setAttribute( "class", "savedGameListContainer" );
        savedGameListTitleDIVContainer.setAttribute( "id", "savedGameListContainer" );
        document.getElementById( "savedGameListBlock" ).appendChild( savedGameListTitleDIVContainer );

        // the div for the title
        let titleDiv = document.createElement( "DIV" );
        titleDiv.setAttribute( "class", "savedGameListTitle" );
        titleDiv.setAttribute( "id", "savedGameListTitle" );

        // the actual title
        let savedGameListTitle = document.createElement( "P" );
        savedGameListTitle.innerHTML = "List of saved Games";

        // lets add the title to the div
        titleDiv.appendChild( savedGameListTitle );

        // add that to the container
        savedGameListTitleDIVContainer.appendChild( titleDiv );

        // create the div that will contain the list of games
        let listOfPastGameDiv = document.createElement( "DIV" );
        //divblock.setAttribute( "class", "modal-content" );
        listOfPastGameDiv.setAttribute( "id", "playerNameBlock" );
        listOfPastGameDiv.setAttribute( "class", "savedGame setup-btn-ls" )



        // creates the select container
        let selectOptionList = document.createElement( "SELECT" );
        // plus 1 so if there is only game option it won't default to selected
        selectOptionList.setAttribute( "size", localStorage.length + 1 );
        selectOptionList.setAttribute( "id", "savedGameList" );
        selectOptionList.setAttribute( "onchange", "updatePlayerNameField(this.selectedIndex)" );
        selectOptionList.setAttribute( "class", "form-control" );


        // reads the local storage and adds each game as an option
        for ( let i = 0; i < localStorage.length; ++i ) {
            let pastGame = document.createElement( "OPTION" );
            pastGame.setAttribute( "class", "game-name" );
            pastGame.setAttribute( "value", localStorage.key( i ) );
            pastGame.innerHTML = localStorage.key( i );
            //pastGame.setAttribute("onselect", "updatePlayerNameField()" );
            selectOptionList.appendChild( pastGame );

        }

        // chain them all up
        listOfPastGameDiv.appendChild( selectOptionList );
        savedGameListTitleDIVContainer.appendChild( listOfPastGameDiv );
        document.getElementById( "savedGameListBlock" ).appendChild( savedGameListTitleDIVContainer );
    }


}

// update the player name input box when a past game has been selected
function updatePlayerNameField ( selectedGamed ) {
    nameInput.value = localStorage.key( selectedGamed );
}