
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
                case "Eniac":
                    gameData.eniac = mapObj;
                    break;
            }
            break;

        // MapObject don't have x and y members
        case "Recipe":
            gameData.recipe[0] = objX;
            gameData.recipe[1] = objY;
            break;

        case "BadMax":
            gameData.badMax[0] = objX;
            gameData.badMax[1] = objY;
            break;

        case "StationTRM":
            while (gameData.stationTRM[index] && gameData.stationTRM[index][0] !== undefined )
                ++index;
            gameData.stationTRM[index] = [objX, objY];
            break;

        case "StationTR":
            while (gameData.stationTR[index] && gameData.stationTR[index][0] !== undefined )
                ++index;
            gameData.stationTR[index] = [objX, objY];
            break;

        case "StationTM":
            while (gameData.stationTM[index] && gameData.stationTM[index][0] !== undefined )
                ++index;
            gameData.stationTM[index] = [objX, objY];
            break;

        case "StationT":
            while (gameData.stationT[index] && gameData.stationT[index][0] !== undefined )
                ++index;
            gameData.stationT[index] = [objX, objY];
            break;

        case "AbFreighter":
            while (gameData.abFreighter[index] && gameData.abFreighter[index][0] !== undefined )
                ++index;
            gameData.abFreighter[index] = [objX, objY];
            break;

        case "Asteroid":
            while (gameData.asteroid[index] && gameData.asteroid[index][0] !== undefined )
                ++index;
            gameData.asteroid[index] = [objX, objY];
            break;

        case "MeteorShower":
            while (gameData.meteorShower[index] && gameData.meteorShower[index][0] !== undefined )
                ++index;
            gameData.meteorShower[index] = [objX, objY];
            break;
    }

}

