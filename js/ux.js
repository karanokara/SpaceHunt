//File contains functions to render the user interface to the user

//function captures direction value and calls submit
function submitNorthHeading() {
    let direction_value = 90;
    let magnitude_value = parseInt(document.getElementById("movement-magnitude").value);
    submitHeading(direction_value, magnitude_value);
}

//function captures direction value and calls submit
function submitEastHeading() {
    let direction_value = 0;
    let magnitude_value = parseInt(document.getElementById("movement-magnitude").value);
    submitHeading(direction_value, magnitude_value);
}

//function captures direction value and calls submit
function submitSouthHeading() {
    let direction_value = 270;
    let magnitude_value = parseInt(document.getElementById("movement-magnitude").value);
    submitHeading(direction_value, magnitude_value);
}

//function captures direction value and calls submit
function submitWestHeading() {
    let direction_value = 180;
    let magnitude_value = parseInt(document.getElementById("movement-magnitude").value);
    submitHeading(direction_value, magnitude_value);
}

//function takes direction value and calls oldspice move w/ new
//heading
function submitHeading (direction_value, magnitude_value) {

    //x/y input = new coordinates (assign new location to these)
    window.oldSpice.move( magnitude_value, direction_value );

    //create a log of previous location
    //createNewLog(); //data log (NOT IN USE)
}

// Allows "wasd" and the arrows to control the ship
window.addEventListener("keydown", event => {
    let distance = document.getElementById("movement-magnitude").value;
    let nextInput = document.getElementById("movement-magnitude");
    let keyPressed = event.keyCode;

    // checks to make sure the ship has been created, that the game has started
    // will only move the ship if it is within the bounds of the map
    if(window.oldSpice != undefined && distance > 0 && distance < gameData.mapSize) {
        if (keyPressed === 38 || event.key === 'w') {
            submitHeading(90, distance);
        } else if (keyPressed === 37 || event.key === 'a') {
            submitHeading(180, distance);
        } else if (keyPressed === 40 || event.key === 's') {
            submitHeading(270, distance);
        } else if (keyPressed === 39 || event.key === 'd') {
            submitHeading(0, distance);
        } else if ( keyPressed === 49 || keyPressed === 50 ||
            keyPressed === 51 || keyPressed === 52 ||
            keyPressed === 53 || keyPressed === 54 ||
            keyPressed === 55 || keyPressed === 56 ||
            keyPressed === 57 || keyPressed === 58) {
            nextInput.focus();
        }
    }
});


//function for rendering the current position to the DOM
function updateHeading () {

    //assign element vars
    let heading = document.getElementById( "heading" );

    //renders new coordinates to user
    heading.innerHTML = (window.oldSpice ? window.oldSpice.x : 0) + " , " + (window.oldSpice ? window.oldSpice.y : 0);
}

//function from updating oldspice status levels to DOM
function updateLevels () {

    //assign element vars
    let credit = document.getElementById( "creditValue" );
    let energy = document.getElementById( "energyValue" );
    let supplies = document.getElementById( "supplyValue" );
    let damage = document.getElementById("damageValue");
    let sensors = document.getElementById("sensorLevel")
    let engines = document.getElementById("engineLevel");

    //shows level value or 0 if null
    credit.innerHTML = window.oldSpice ? window.oldSpice.credit : 0;
    energy.innerHTML = window.oldSpice ? window.oldSpice.energy : 0;
    supplies.innerHTML = window.oldSpice ? window.oldSpice.supplies : 0;
    damage.innerHTML = window.oldSpice ? window.oldSpice.isDamaged : 0;
    sensors.innerHTML = window.oldSpice ? window.oldSpice.sensor.level : 0;
    engines.innerHTML = window.oldSpice ? window.oldSpice.engineLv : 0;
}


//function for generating new data-log list to DOM (NOT IN USE)
function createNewLog () {

    let x_val = window.oldSpice.x;
    let y_val = window.oldSpice.y;
    let data_log = document.getElementById( "data-log" );
    let log = document.createElement( "li" );
    log.className = "log";
    log.innerHTML = "X: " + x_val + " Y: " + y_val;
    data_log.appendChild( log );
}

//function to add new non form message to message board
//function takes string message as arg
function addMessage(message) {
    let message_list = document.getElementById("message-list");
    let new_message = document.createElement("li");
    new_message.setAttribute("class", "message");
    new_message.innerHTML = message;
    message_list.appendChild(new_message);
}

//function to add a new form message to message board
//function takes string message and 2 input tags as arguments
function addMessageForm(message, message_res_ok, message_res_cancel) {

    //target message-list
    let message_list = document.getElementById("message-list");

    //create new message li item
    let new_message = document.createElement("li");
    new_message.setAttribute("class", "message");

    let new_form = document.createElement("form");

    //add buttons to form
    new_form.appendChild(message_res_ok);
    new_form.appendChild(message_res_cancel);

    //nest form in li
    new_message.appendChild(new_form);

    //nest li in message list
    new_message.innerHTML = message;
    message_list.appendChild(new_message);
}


// I think I will just put this in main.js
function savedGameDisplay(savedGameName) {
    //let savedGameList = document.getElementById("playerName");

    let pastGame = document.createElement("INPUT");

    pastGame.setAttribute("class", "savedGame");
    //pastGame.className = "sGames";
    pastGame.setAttribute("type", "text");
    pastGame.setAttribute("value", savedGameName);
    //pastGame.innerHTML = savedGameName;
    document.getElementById("playerName").appendChild(pastGame);


    //document.querySelectorAll( "#playerName" )[0].value = "ss";
}

