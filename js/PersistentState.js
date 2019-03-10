
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
            gameData.stationTRM.push([objX, objY]);
            break;

        case "StationTR":
            gameData.stationTR.push([objX, objY]);
            break;

        case "StationTM":
            gameData.stationTM.push([objX, objY]);
            break;

        case "StationT":
            gameData.stationT.push([objX, objY]);
            break;

        case "AbFreighter":
            gameData.abFreighter.push([objX, objY]);
            break;

        case "Asteroid":
            gameData.asteroid.push([objX, objY]);
            break;

        case "MeteorShower":
            gameData.meteorShower.push([objX, objY]);
            break;
    }

}

