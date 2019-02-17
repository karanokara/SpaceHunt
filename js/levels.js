var Levels = {
    energy      : 0,
    supplies    : 0,
    credits     : 0,
    normalPlay  : true,
}
//Returns a string with the resource lacking or return “OK” if the levels are not empty
function checkLevels(){
    if (Levels.credits < 1) {
        return "No more Credits!";
    }
    else if (Levels.energy < 1 && normalPlay) {
        return "No more Energy...Game Over!";
    }
    else if (Levels.supplies < 1 && normalPlay) {
        return "No more Supplies...Game Over!";
    }
    else{
        return "OK";
    }
};

function logLevels(){
    console.log("Energy = "+Levels.energy+"; Supplies = "+ Levels.supplies+"; Credits = "+Levels.credits+"Normal Play = "+normalPlay);  
}

function setLevels(e, s, c){
    if(e > -1){
        Levels.energy = e;
    }
    if(s > -1){
        Levels.supplies = s;
    }
    if(c > -1){
        Levels.credits = c;
    }
}
