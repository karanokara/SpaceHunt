
function saveShip(gameData, oldSpice){
    gameData.shipX           = oldSpice.x;
    gameData.shipY           = oldSpice.y;
    gameData.shipEnergy      = oldSpice.energy;
    gameData.shipSupplies    = oldSpice.supplies;
    gameData.shipCredit      = oldSpice.credit;
    gameData.shipEngineLv    = oldSpice.engineLv;
    gameData.shipDamaged     = oldSpice.isDamaged;
    gameData.shipNormalPlay  = oldSpice.normalPlay
}


function saveMap(gameData, mapObj, objX, objY){
    let index = 0;

    switch (mapObj.objType) {

        case "Planet":

            switch (mapObj.name) {
                // planets have x and y coordinates
                case "Celeron":
                    gameData.celeron = mapObj;
                    break;
                case "Xeon":
                    gameData.xeon = mapObj;
                    break;
                case "Ryzen":
                    gameData.ryzen = mapObj;
                    break;
            }
            break;

        // MapObject don't have x and y members
        case "StationTRM":
            while (gameData.stationTRM[index])
                ++index;
            gameData.stationTRM[index] = objX;   // x
            gameData.stationTRM[++index] = objY; // y
            break;

        case "StationTR":
            while (gameData.stationTR[index])
                ++index;
            gameData.stationTR[index] = objX;
            gameData.stationTR[++index] = objY;
            break;

        case "StationTM":
            while (gameData.stationTM[index])
                ++index;
            gameData.stationTM[index] = objX;
            gameData.stationTM[++index] = objY;
            break;

        case "StationT":
            while (gameData.stationT[index])
                ++index;
            gameData.stationT[index] = objX;
            gameData.stationT[++index] = objY;
            break;

        case "AbFreighter":
            while (gameData.abFreighter[index])
                ++index;
            gameData.abFreighter[index] = objX;
            gameData.abFreighter[++index] = objY;
            break;

        case "Asteroid":
            while (gameData.asteroid[index])
                ++index;
            gameData.asteroid[index] = objX;
            gameData.asteroid[++index] = objY;
            break;

        case "MeteorShower":
            while (gameData.meteorShower[index])
                ++index;
            gameData.meteorShower[index] = objX; // x
            gameData.meteorShower[++index] = objY; // y
            break;
    }

}

