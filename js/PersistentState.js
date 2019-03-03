//const nameInput = document.querySelector('#playerName');
const startBtn = document.querySelector('#startButton');


function savedGame() {
    var file = [];
    file.push(map.size);
    file.push(window.oldSpice.x + "," + window.oldSpice.y);
    file.push(window.oldSpice.energy);
    file.push(window.oldSpice.supplies);
    file.push(window.oldSpice.credit);
    file.push(window.oldSpice.engineLv);
    file.push(window.oldSpice.isDamaged);
    file.push(window.oldSpice.sensor);
    file.push(window.oldSpice.messageBoard);



    //goes through each cell of the map and saves it's information to its own index of file.
    for(i = 0; i < map.size; ++i){
        for(j = 0; j < map.size; ++j){
            file.push(map[i][j]);
        }
    }

    //stores as a string in JSON format for the parsing script
    localStorage.setItem("savedGame", JSON.stringify(file));
}


//Saves the current state of the program.
function storeState(){
    if(typeof(Storage) == "undefined")
        alert("Browser Does Not Support Storage!!");
    else
       // localStorage.setItem('name', nameInput.value);

    if(typeof(Storage) !== "undefined"){
        localStorage.setItem('sLevels', JSON.stringify(Levels));
    }else{
        return "No Local Storage";
    }
}

function readState(){
    if(localStorage.getItem("sLevel"))
        Levels = JSON.parse(localStorage.getItem("sLevels"));
    else{
        return "Nothing to Access";
    }
}

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

function saveMap(gameData, gameMap){

    // read all the map and store when location has an object only.
    for(let i = 0; i < gameMap.size; ++i){
        for(let j = 0; j < gameData.mapSize; ++j){
            if(gameMap.map[i][j]){
                let index = 0;
                switch (gameMap.map[i][j].objType) {


                    case "Planet":

                        switch (gameMap.map[i][j].name) {
                            // planets have x and y coordinates
                            case "Celeron":
                                gameData.celeron = gameMap.map[i][j];
                                break;
                            case "Xeon":
                                gameData.xeon = gameMap.map[i][j];
                                break;
                            case "Ryzen":
                                gameData.ryzen = gameMap.map[i][j];
                                break;
                        }
                        break;

                    // MapObject don't have x and y members
                    // i will mark the x coordinate
                    // j will mark the y coordinate
                    case "StationTRM":
                        while (gameData.stationTRM[index])
                            ++index;
                        gameData.stationTRM[index] = i;   // x
                        gameData.stationTRM[++index] = j; // y
                        break;

                    case "StationTR":
                        while (gameData.stationTR[index])
                            ++index;
                        gameData.stationTR[index] = i;
                        gameData.stationTR[++index] = j;
                        break;

                    case "StationTM":
                        while (gameData.stationTM[index])
                            ++index;
                        gameData.stationTM[index] = i;
                        gameData.stationTM[++index] = j;
                        break;

                    case "StationT":
                        while (gameData.stationT[index])
                            ++index;
                        gameData.stationT[index] = i;
                        gameData.stationT[++index] = j;
                        break;

                    case "AbFreighter":
                        while (gameData.abFreighter[index])
                            ++index;
                        gameData.abFreighter[index] = i;
                        gameData.abFreighter[++index] = j;
                        break;

                    case "Asteroid":
                        while (gameData.asteroid[index])
                            ++index;
                        gameData.asteroid[index] = i; // x
                        gameData.asteroid[++index] = j; // y
                        break;
                }

            }
        }
    }
}

