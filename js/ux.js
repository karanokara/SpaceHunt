//File contains functions to render the user interface to the user

//function captures direction value and calls submit
function submitNorthHeading() {
    let direction_value = 90;
    submitHeading(direction_value);
}

//function captures direction value and calls submit
function submitEastHeading() {
    let direction_value = 0;
    submitHeading(direction_value);
}

//function captures direction value and calls submit
function submitSouthHeading() {
    let direction_value = 270;
    submitHeading(direction_value);
}

//function captures direction value and calls submit
function submitWestHeading() {
    let direction_value = 180;
    submitHeading(direction_value);
}

//function takes direction value and calls oldspice move w/ new
//heading
function submitHeading (direction_value) {

    //x/y input = new coordinates (assign new location to these)
    window.oldSpice.move( 1, parseInt(direction_value) );


    //create a log of previous location
    createNewLog();
}
/*
// Install keyboard handler for arrow keys
window.addEventListener("keydown", event => {
    if (       event.key === 38 || event.key === 'w' ) {
        submitHeading(90);
    } else if (event.key === 37 || event.key === 'a' ) {
            submitHeading(180);
    } else if (event.key === 40 || event.key === 's' ) {
        submitHeading(270);
    } else if (event.key === 39 || event.key === 'd' ) {
        submitHeading(0);
    }
});
*/

//function for rendering the current position to the DOM
function updateHeading () {

    //assign element vars
    let x = document.getElementById( "x-heading" );
    let y = document.getElementById( "y-heading" );

    //renders new coordinates to user
    x.innerHTML = window.oldSpice ? window.oldSpice.x : 0;
    y.innerHTML = window.oldSpice ? window.oldSpice.y : 0;
}

function updateLevels () {

    //assign element vars
    let credit = document.getElementById( "creditValue" );
    let energy = document.getElementById( "energyValue" );
    let supplies = document.getElementById( "supplyValue" );

    credit.innerHTML = window.oldSpice ? window.oldSpice.credit : 0;
    energy.innerHTML = window.oldSpice ? window.oldSpice.energy : 0;
    supplies.innerHTML = window.oldSpice ? window.oldSpice.supplies : 0;
}

//function for rendering the current degree selector value to DOM
function showDirectionInput () {

    let slider = document.getElementById( "direction-input" );
    let output = document.getElementById( "direction-value" );
    output.innerHTML = slider.value;
}

//function for generating new data-log list to DOM
function createNewLog () {

    let x_val = window.oldSpice.x;
    let y_val = window.oldSpice.y;
    let data_log = document.getElementById( "data-log" );
    let log = document.createElement( "li" );
    log.className = "log";
    log.innerHTML = "X: " + x_val + " Y: " + y_val;
    data_log.appendChild( log );
}

function addMessage(message) {
    let message_list = document.getElementById("message-list");
    let new_message = document.createElement("li");
    new_message.setAttribute("class", "message");
    new_message.innerHTML = message;
    message_list.appendChild(new_message);
}

function savedGameDisplay(savedGame) {
    let savedGameList = document.getElementById("gameList");
    let pastGame = document.createElement("li");
    pastGame.setAttribute("class", "savedGame");
    pastGame.innerHTML = savedGame;
    savedGameList.appendChild(pastGame);
}

