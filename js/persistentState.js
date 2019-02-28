const nameInput = document.querySelector('#playerName');
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
        localStorage.setItem('name', nameInput.value);

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


