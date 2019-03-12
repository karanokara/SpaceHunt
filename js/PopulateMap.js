/*
    WormHole(), 
    Asteroid(),
    MeteorShower(),
    AbFreighter(),
    Ryzen(),
    Eniac(),
    BadMax(),
    MuskTesla(),
    MiniMart(),
*/
function PopulateMap ( gameMap ) {
    // load planets
    generateCeleron( gameMap );
    generateXeon( gameMap );
    generateRyzen( gameMap );
    generateEniac( gameMap );
    generateBadMax( gameMap );
    generateRecipe( gameMap );

    // load celestial objects
    if ( window.gameData.asteroidRandom ) {
        for (let i = 0; i < 10; ++i) {
            let objCoordx = Math.ceil( Math.random() * ( gameMap.size ) );
            let objCoordy = Math.ceil( Math.random() * ( gameMap.size ) );

            generateCelestialObjects( gameMap, 4, objCoordx, objCoordy );
        }
    } else {
        for ( let coords of window.gameData.asteroids ) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];

            generateCelestialObjects( gameMap, 4, objCoordx, objCoordy );
        }
    }

    if ( window.gameData.meteorRandom ) {
        for (let i = 0; i < 10; ++i) {
            let objCoordx = Math.ceil( Math.random() * ( gameMap.size ) );
            let objCoordy = Math.ceil( Math.random() * ( gameMap.size ) );

            generateCelestialObjects( gameMap, 6, objCoordx, objCoordy ); 
        }
    } else {
        for ( let coords of window.gameData.meteors ) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];

            generateCelestialObjects( gameMap, 6, objCoordx, objCoordy );
        }
    }

    if ( window.gameData.stationRandom ) {
        for (let i = 0; i < 10; ++i) {
            let objCoordx = Math.ceil( Math.random() * ( gameMap.size ) );
            let objCoordy = Math.ceil( Math.random() * ( gameMap.size ) );

            generateCelestialObjects( gameMap, (i % 4), objCoordx, objCoordy );
        }
    } else {
        for ( let coords of window.gameData.stations ) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];
            let stationType = Math.floor ( Math.random() * 4 );
            generateCelestialObjects( gameMap, stationType, objCoordx, objCoordy );
        }
    }

    if ( window.gameData.freighterRandom ) {
        for (let i = 0; i < 10; ++i) {
            let objCoordx = Math.ceil( Math.random() * ( gameMap.size ) );
            let objCoordy = Math.ceil( Math.random() * ( gameMap.size ) );

            generateCelestialObjects( gameMap, 5, objCoordx, objCoordy );
        }
    } else {
        for ( let coords of window.gameData.freighters ) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];

            generateCelestialObjects( gameMap, 5, objCoordx, objCoordy );
        }
    }

    /* load celestial objects -- deprecated
    for ( let i = 0; i < 50; ++i ) {
        let objCoordx = Math.ceil( Math.random() * ( gameMap.size ) );
        let objCoordy = Math.ceil( Math.random() * ( gameMap.size ) );

        generateCelestialObjects( gameMap, i % 7, objCoordx, objCoordy );
    }
    */
}

/**
 * generates map objects by reading the local storage to get their locations
 */
function PopulateSavedMap ( gameMap, savedMap ) {

    // load planets
    if(savedMap.celeron)
        generateCeleronAtLocation(gameMap, savedMap.celeron.x, savedMap.celeron.y);
    else
        generateCeleronAtLocation(gameMap, savedMap.celeronX, savedMap.celeronY);
    if(savedMap.xeon)
        generateXeonAtLocation(gameMap, savedMap.xeon.x, savedMap.xeon.y);
    else
        generateXeonAtLocation(gameMap, savedMap.xeonX, savedMap.xeonY);
    if(savedMap.ryzen)
        generateRyzenAtLocation(gameMap, savedMap.ryzen.x, savedMap.ryzen.y);
    else
        generateRyzenAtLocation(gameMap, savedMap.ryzenX, savedMap.ryzenY);

    generateEniacAtLocation(gameMap, savedMap.eniac.x, savedMap.eniac.y);
    generateBadMaxAtLocation(gameMap, savedMap.badMax[0], savedMap.badMax[1]);
    generateRecipeAtLoation(gameMap, savedMap.recipe[0], savedMap.recipe[1]);


    // load celestial objects
    for ( const coords of savedMap.stationTRM ) {
        if(coords[0]) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];

            generateCelestialObjects(gameMap, 0, objCoordx, objCoordy);
        }
    }
    for ( let coords of savedMap.stationTR ) {
        if(coords[0]) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];

            generateCelestialObjects(gameMap, 1, objCoordx, objCoordy);
        }
    }
    for ( let coords of savedMap.stationTM ) {
        if(coords[0]) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];

            generateCelestialObjects(gameMap, 2, objCoordx, objCoordy);
        }
    }
    for ( let coords of savedMap.stationT ) {
        if(coords[0]) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];

            generateCelestialObjects(gameMap, 3, objCoordx, objCoordy);
        }
    }
    for ( const coords of savedMap.asteroid ) {
        if(coords[0]) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];

            generateCelestialObjects(gameMap, 4, objCoordx, objCoordy);
        }
    }
    for ( let coords of savedMap.abFreighter ) {
        if(coords[0]) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];

            generateCelestialObjects(gameMap, 5, objCoordx, objCoordy);
        }
    }
    for ( let coords of savedMap.meteorShower ) {
        if(coords[0]) {
            let objCoordx = coords[0];
            let objCoordy = coords[1];

            generateCelestialObjects(gameMap, 6, objCoordx, objCoordy);
        }
    }

    /*
    for ( let i = 0; i < MAX_CELEST_OBJ; i += 2 ) {
        if ( savedMap.stationTRM[i] )
            generateCelestialObjects( gameMap, 0, savedMap.stationTRM[i], savedMap.stationTRM[i + 1] );
        if ( savedMap.stationTR[i] )
            generateCelestialObjects( gameMap, 1, savedMap.stationTR[i], savedMap.stationTR[i + 1] );
        if ( savedMap.stationTM[i] )
            generateCelestialObjects( gameMap, 2, savedMap.stationTM[i], savedMap.stationTM[i + 1] );
        if ( savedMap.stationT[i] )
            generateCelestialObjects( gameMap, 3, savedMap.stationT[i], savedMap.stationT[i + 1] );
        if ( savedMap.asteroid[i] )
            generateCelestialObjects( gameMap, 4, savedMap.asteroid[i], savedMap.asteroid[i + 1] );
        if ( savedMap.abFreighter[i] )
            generateCelestialObjects( gameMap, 5, savedMap.abFreighter[i], savedMap.abFreighter[i + 1] );
        if ( savedMap.meteorShower[i] )
            generateCelestialObjects( gameMap, 6, savedMap.meteorShower[i], savedMap.meteorShower[i + 1] );
    }
    */
}

function generateCelestialObjects ( gameMap, type, celestX, celestY ) {
    switch ( type ) {
        case 0:
            mapObj = new SpaceStation( [new MuskTesla( 100, 1000 ), new RepairDepot, new MiniMart()] );
            break;

        case 1:
            mapObj = new SpaceStation( [new MuskTesla( 100, 1000 ), new RepairDepot()] );
            break;

        case 2:
            mapObj = new SpaceStation( [new MuskTesla( 100, 1000 ), new MiniMart()] );
            break;

        case 3:
            mapObj = new SpaceStation( [new MuskTesla( 100, 1000 )] );
            break;

        case 4:
            mapObj = new Asteroid();
            break;

        case 5:
            mapObj = new AbFreighter();
            break;

        case 6:
            mapObj = new MeteorShower();
            break;
    }
    updateLogs( gameMap, mapObj, celestX, celestY );
}


function updateLogs ( gameMap, mapObj, objCoordX, objCoordY ) {
    console.log( 'Placed ' + mapObj.objType + " at position: " + objCoordX + ' ' + objCoordY );
    gameMap.add( mapObj, objCoordX, objCoordY );

    //saveMap when it is populate as the object's locations won't ever change
    saveMap( gameData, mapObj, objCoordX, objCoordY );
}

function generateEniac ( gameMap ) {
    generateEniacAtLocation(gameMap, 0, 0);
}

function generateEniacAtLocation(gameMap, eniacCoordX, eniacCoordY) {

    mapObj = new Eniac();

    mapObj.x = eniacCoordX;
    mapObj.y = eniacCoordY;

    //dataLog[2].nodeValue = eniacCoordX + " " + eniacCoordY; //data log not in use

    updateLogs( gameMap, mapObj, eniacCoordX, eniacCoordY );
}

function generateCeleron( gameMap ) {
    let randomCelX = Math.ceil(Math.random() * (gameMap.size));
    let randomCelY = Math.ceil(Math.random() * (gameMap.size));
    generateCeleronAtLocation(gameMap, randomCelX, randomCelY);
}

function generateCeleronAtLocation(gameMap, celeronCoordX, celeronCoordY) {

    mapObj = new Celeron();

    if ( gameData.celeronX || gameData.celeronX === 0 )
        celeronCoordX = gameData.celeronX;
    if ( gameData.celeronY || gameData.celeronY === 0 )
        celeronCoordY = gameData.celeronY;

    mapObj.x = celeronCoordX;
    mapObj.y = celeronCoordY;

    //dataLog[2].nodeValue = celeronCoordX + " " + celeronCoordY; //data log not in use

    updateLogs( gameMap, mapObj, celeronCoordX, celeronCoordY );
    gazePopulate( mapObj, celeronCoordX, celeronCoordY );
}


function generateXeon ( gameMap ) {
    let randomXeonX = Math.ceil(Math.random() * (gameMap.size));
    let randomXeonY = Math.ceil(Math.random() * (gameMap.size));
    generateXeonAtLocation(gameMap, randomXeonX, randomXeonY )
}

function generateXeonAtLocation(gameMap, xeonCoordX, xeonCoordY) {

    mapObj = new Xeon();

    if ( gameData.xeonX || gameData.xeonX === 0 )
        xeonCoordX = gameData.xeonX;
    if ( gameData.xeonY || gameData.xeonY === 0 )
        xeonCoordY = gameData.xeonY;

    mapObj.x = xeonCoordX;
    mapObj.y = xeonCoordY;

    //dataLog[4].nodeValue = xeonCoordX + " " + xeonCoordY; //data log not in use

    updateLogs( gameMap, mapObj, xeonCoordX, xeonCoordY );
    gazePopulate( mapObj, xeonCoordX, xeonCoordY );
}

function generateRecipe ( gameMap ) {
    let randomRecipeX = Math.ceil( Math.random() * ( gameMap.size ) );
    let randomRecipeY = Math.ceil( Math.random() * ( gameMap.size ) );
    mapObj = new KokaKolaRecipe();
    while ( !gameMap.add( mapObj, randomRecipeX, randomRecipeY ) ) {
        randomRecipeX = Math.ceil( Math.random() * ( gameMap.size ) );
        randomRecipeY = Math.ceil( Math.random() * ( gameMap.size ) );
    }
    console.log( "Placed Recipe at " + randomRecipeX + ' ' + randomRecipeY );
    saveMap( gameData, mapObj, randomRecipeX, randomRecipeY );
}

function generateBadMax ( gameMap ) {
    let randomBadMaxX = Math.ceil( Math.random() * ( gameMap.size ) );
    let randomBadMaxY = Math.ceil( Math.random() * ( gameMap.size ) );
    mapObj = new BadMax();

    if ( gameData.badMaxX || gameData.badMaxX === 0 )
        randomBadMaxX = gameData.badMaxX;

    if ( gameData.badMaxY || gameData.badMaxY === 0 )
        randomBadMaxY = gameData.badMaxY;

    while ( !gameMap.add( mapObj, randomBadMaxX, randomBadMaxY ) ) {
        randomBadMaxX = Math.ceil( Math.random() * ( gameMap.size ) );
        randomBadMaxY = Math.ceil( Math.random() * ( gameMap.size ) );
    }
    console.log( "Placed BadMax at " + randomBadMaxX + ' ' + randomBadMaxY );
    saveMap( gameData, mapObj, randomBadMaxX, randomBadMaxY );
}

function generateRyzen ( gameMap ) {
    let randomRyzenX = Math.ceil(Math.random() * (gameMap.size));
    let randomRyzenY = Math.ceil(Math.random() * (gameMap.size));
    generateRyzenAtLocation(gameMap, randomRyzenX, randomRyzenY)
}

function generateRyzenAtLocation(gameMap, ryzenCoordX, ryzenCoordY) {

    mapObj = new Ryzen();

    if ( gameData.ryzenX || gameData.ryzenX === 0 )
        ryzenCoordX = gameData.ryzenX;
    if ( gameData.ryzenY || gameData.ryzenY === 0 )
        ryzenCoordY = gameData.ryzenY;

    mapObj.x = ryzenCoordX;
    mapObj.y = ryzenCoordY;

    //dataLog[6].nodeValue = ryzenCoordX + " " + ryzenCoordY; //data log not in use
    updateLogs( gameMap, mapObj, ryzenCoordX, ryzenCoordY );
    gazePopulate( mapObj, ryzenCoordX, ryzenCoordY );
}

function generateBadMaxAtLocation(gameMap, badMaxCoordX, badMaxCoordY){

    mapObj = new BadMax();

    if ( gameData.badMaxX || gameData.badMaxX === 0 )
        badMaxCoordX = gameData.badMaxX;

    if ( gameData.badMaxY || gameData.badMaxY === 0 )
        badMaxCoordY = gameData.badMaxY;
    
    console.log( "Placed BadMax at " + badMaxCoordX + ' ' + badMaxCoordY );
    updateLogs( gameMap, mapObj, badMaxCoordX, badMaxCoordY );
}


function generateRecipeAtLoation(gameMap, recipeCoordX, recipeCoordY){

    mapObj = new KokaKolaRecipe();
    console.log( "Placed BadMax at " + recipeCoordX + ' ' + recipeCoordX );
    updateLogs( gameMap, mapObj, recipeCoordX, recipeCoordY );
}