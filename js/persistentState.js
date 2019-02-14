//Saves the current state of the program.
function storeState(){
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
