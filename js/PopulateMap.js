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

    dataLog = document.getElementById( 'data-log' ).childNodes;
    console.log( dataLog );

    generateCeleron ( gameMap );
    generateXeon ( gameMap );
    generateRyzen ( gameMap );

    for ( let i = 0; i < 50; ++i ) {
        objCoordx = Math.ceil( Math.random() * ( gameMap.size ) );
        objCoordy = Math.ceil( Math.random() * ( gameMap.size ) );

        switch ( i % 5 ) {
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
        }
        
        console.log( 'Placed ' + mapObj.objType + " at position: " + objCoordx + ' ' + objCoordy );
        gameMap.add( mapObj, objCoordx, objCoordy );

        // populate objects into gazetteer
        gazePopulate( mapObj.objType, objCoordx, objCoordy );
    }
}  

function generateCeleron ( gameMap ) {
    let objCoordx = Math.ceil( Math.random() * ( gameMap.size ) );
    let objCoordy = Math.ceil( Math.random() * ( gameMap.size ) );

    mapObj = new Celeron();

    if ( gameData.celeronX || gameData.celeronX === 0 ) 
        objCoordx = gameData.celeronX;
    if ( gameData.celeronY || gameData.celeronY === 0 ) 
        objCoordy = gameData.celeronY;

    mapObj.x = objCoordx;
    mapObj.y = objCoordy;

    dataLog[2].nodeValue = objCoordx + " " + objCoordy;
    console.log( 'Placed ' + mapObj.objType + " at position: " + objCoordx + ' ' + objCoordy );
    gameMap.add( mapObj, objCoordx, objCoordy );
    gazePopulate( mapObj.objType, objCoordx, objCoordy );
}

function generateXeon ( gameMap ) {
    objCoordx = Math.ceil( Math.random() * ( gameMap.size ) );
    objCoordy = Math.ceil( Math.random() * ( gameMap.size ) );

    mapObj = new Xeon();

    if ( gameData.xeonX || gameData.xeonX === 0 )
        objCoordx = gameData.xeonX;
    if ( gameData.xeonY || gameData.xeonY === 0 )
        objCoordy = gameData.xeonY;

    mapObj.x = objCoordx;
    mapObj.y = objCoordy;

    dataLog[4].nodeValue = objCoordx + " " + objCoordy;
    console.log( 'Placed ' + mapObj.objType + " at position: " + objCoordx + ' ' + objCoordy );
    gameMap.add( mapObj, objCoordx, objCoordy );
    gazePopulate( mapObj.objType, objCoordx, objCoordy );
}

function generateRyzen ( gameMap ) {
    objCoordx = Math.ceil( Math.random() * ( gameMap.size ) );
    objCoordy = Math.ceil( Math.random() * ( gameMap.size ) );

    mapObj = new Ryzen();

    if ( gameData.ryzenX || gameData.ryzenX === 0 )
        objCoordx = gameData.ryzenX;
    if ( gameData.ryzenY || gameData.ryzenY === 0 )
        objCoordy = gameData.ryzenY;

    mapObj.x = objCoordx;
    mapObj.y = objCoordy;

    dataLog[6].nodeValue = objCoordx + " " + objCoordy;
    console.log( 'Placed ' + mapObj.objType + " at position: " + objCoordx + ' ' + objCoordy );
    gameMap.add( mapObj, objCoordx, objCoordy );
    gazePopulate( mapObj.objType, objCoordx, objCoordy );
}