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
    for ( let i = 0; i < 50; ++i ) {
        let objCoordx = Math.ceil( Math.random() * ( gameMap.size ) );
        let objCoordy = Math.ceil( Math.random() * ( gameMap.size ) );

        generateCelestialObjects( gameMap, i % 7, objCoordx, objCoordy );
    }
}
/**
 * generates map objects by reading the local storage to get their locations
 */
function PopulateSavedMap ( gameMap, savedMap ) {

    // load planets
    generateCeleronAtLocation(gameMap, savedMap.celeron.x, savedMap.celeron.y);
    generateXeonAtLocation(gameMap, savedMap.xeon.x, savedMap.xeon.y);
    generateRyzenAtLocation(gameMap, savedMap.ryzen.x, savedMap.ryzen.y);
    //generateEniacAtLocation(gameMap, eniacCoordX, eniacCoordY);
    //generateBadMaxAtLocation(gameMap);
    //generateRecipeAtLoation(gameMap);


    // load celestial objects
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

    //saveMap when it is populate as the object's locations won't move ever    
    if ( !gameData.setupMode )
        saveMap( gameData, mapObj, objCoordX, objCoordY );
}

function generateEniac ( gameMap ) {
    let randomEniacX = Math.ceil(Math.random() * (gameMap.size));
    let randomEniacY = Math.ceil(Math.random() * (gameMap.size));
    generateEniacAtLocation(gameMap, randomEniacX, randomEniacY);
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
    while ( !gameMap.add( new KokaKolaRecipe(), randomRecipeX, randomRecipeY ) ) {
        randomRecipeX = Math.ceil( Math.random() * ( gameMap.size ) );
        randomRecipeY = Math.ceil( Math.random() * ( gameMap.size ) );
    }
    console.log( "Placed Recipe at " + randomRecipeX + ' ' + randomRecipeY );
}

function generateBadMax ( gameMap ) {
    let randomBadMaxX = Math.ceil( Math.random() * ( gameMap.size ) );
    let randomBadMaxY = Math.ceil( Math.random() * ( gameMap.size ) );
    while ( !gameMap.add( new BadMax(), randomBadMaxX, randomBadMaxY ) ) {
        randomBadMaxX = Math.ceil( Math.random() * ( gameMap.size ) );
        randomBadMaxY = Math.ceil( Math.random() * ( gameMap.size ) );
    }
    console.log( "Placed BadMax at " + randomBadMaxX + ' ' + randomBadMaxY );
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