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

    for ( let i = 0; i < 50; ++i ) {
        objCoordx = Math.ceil( Math.random() * ( gameMap.size ) );
        objCoordy = Math.ceil( Math.random() * ( gameMap.size ) );

        if ( i == 0 ) {
            mapObj = new Celeron();

            if ( window.gameData.celeronX && window.gameData.celeronY ) {
                objCoordx = window.gameData.celeronX;
                objCoordy = window.gameData.celeronY;
            }

            mapObj.x = objCoordx;
            mapObj.y = objCoordy;
    
            dataLog[2].nodeValue = objCoordx + " " + objCoordy;
        }
        else if ( i == 1 ) {
            mapObj = new Xeon();

            if ( window.gameData.xeonX && window.gameData.xeonY ) {
                objCoordx = window.gameData.xeonX;
                objCoordy = window.gameData.xeonY;
            }

            mapObj.x = objCoordx;
            mapObj.y = objCoordy;
    
            dataLog[4].nodeValue = objCoordx + " " + objCoordy;
        }
        else if ( i == 2 ) {
            mapObj = new Ryzen();

            if ( window.gameData.ryzenX && window.gameData.ryzenY ) {
                objCoordx = window.gameData.ryzenX;
                objCoordy = window.gameData.ryzenY;
            }

            mapObj.x = objCoordx;
            mapObj.y = objCoordy;

            dataLog[6].nodeValue = objCoordx + " " + objCoordy;
        }
        else {
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

                case 5:
                    mapObj = new Ryzen();
                    break;
            }
        }
        console.log( 'Placed ' + mapObj.objType + " at position: " + objCoordx + ' ' + objCoordy );
        gameMap.add( mapObj, objCoordx, objCoordy );

        // populate objects into gazetteer
        gazePopulate( mapObj.objType, objCoordx, objCoordy );
    }
}        
