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
    var mapObj,
        objIdx,
        objCoordx,
        objCoordy;




    generateCeleronRandom( gameMap );
    generateXeonRandom( gameMap );
    generateRyzenRandom( gameMap );

    for ( let i = 0; i < 50; ++i ) {
        objCoordx = Math.ceil(Math.random() * (gameMap.size));
        objCoordy = Math.ceil(Math.random() * (gameMap.size));

        generateCelestialObjects(gameMap, i %6, objCoordx, objCoordy);
    }
}

function generateCelestialObjects(gameMap, type, celestX, celestY){
    switch ( type) {
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
    }
    updateLogs(gameMap, mapObj, celestX, celestY);
}


function updateLogs(gameMap, mapObj, objCoordX, objCoordY ){
    console.log( 'Placed ' + mapObj.objType + " at position: " + objCoordX + ' ' + objCoordY );
    gameMap.add( mapObj, objCoordX, objCoordY );
    gazePopulate( mapObj, objCoordX, objCoordY );
    //saveMap when it is populate as the object's locations won't move ever
    // gazetteer keeps the same order when continuing a game
    saveMap(gameData, gameMap);
}


function generateCeleronRandom ( gameMap ) {
    let randomCelX = Math.ceil(Math.random() * (gameMap.size));
    let randomCelY = Math.ceil(Math.random() * (gameMap.size));
    generateCeleron(gameMap, randomCelX, randomCelY);
}

function generateCeleron(gameMap, celeronCoordX, celeronCoordY) {

    mapObj = new Celeron();

    if ( gameData.celeronX || gameData.celeronX === 0 )
        celeronCoordX = gameData.celeronX;
    if ( gameData.celeronY || gameData.celeronY === 0 )
        celeronCoordY = gameData.celeronY;

    mapObj.x = celeronCoordX;
    mapObj.y = celeronCoordY;

    dataLog[2].nodeValue = celeronCoordX + " " + celeronCoordY;

    updateLogs(gameMap, mapObj, celeronCoordX, celeronCoordY);
}


function generateXeonRandom ( gameMap ) {
    let randomXeonX = Math.ceil(Math.random() * (gameMap.size));
    let randomXeonY = Math.ceil(Math.random() * (gameMap.size));
    generateXeon(gameMap, randomXeonX, randomXeonY )
}

function generateXeon(gameMap, xeonCoordX, xeonCoordY) {

    mapObj = new Xeon();

    if ( gameData.xeonX || gameData.xeonX === 0 )
        xeonCoordX = gameData.xeonX;
    if ( gameData.xeonY || gameData.xeonY === 0 )
        xeonCoordY = gameData.xeonY;

    mapObj.x = xeonCoordX;
    mapObj.y = xeonCoordY;

    dataLog[4].nodeValue = xeonCoordX + " " + xeonCoordY;

    updateLogs(gameMap, mapObj, xeonCoordX, xeonCoordY);
}


function generateRyzenRandom ( gameMap ) {
    let randomRyzenX = Math.ceil(Math.random() * (gameMap.size));
    let randomRyzenY = Math.ceil(Math.random() * (gameMap.size));
    generateRyzen(gameMap, randomRyzenX, randomRyzenY)
}

function generateRyzen(gameMap, ryzenCoordX, ryzenCoordY) {

    mapObj = new Ryzen();

    if ( gameData.ryzenX || gameData.ryzenX === 0 )
        ryzenCoordX = gameData.ryzenX;
    if ( gameData.ryzenY || gameData.ryzenY === 0 )
        ryzenCoordY = gameData.ryzenY;

    mapObj.x = ryzenCoordX;
    mapObj.y = ryzenCoordY;

    dataLog[6].nodeValue = ryzenCoordX + " " + ryzenCoordY;
    updateLogs(gameMap, mapObj, ryzenCoordX, ryzenCoordY);
}