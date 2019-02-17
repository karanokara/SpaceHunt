//File contains functions to collect and handoff user entered data

function renderGameMode() {}


//function for submitting a new coordinate value to be rendered on the page
function submitHeading() {

    //assign element vars
    let direction = document.getElementById("direction-input");
    let magnitude = document.getElementById("magnitude-input");

    //x/y input = new coordinates (assign new location to these)
    let x_input = direction.value;
    let y_input = magnitude.value;

    //new heading object
    let heading = {
        x_heading: x_input,
        y_heading: y_input
    };

    //stores new coordinates in local storage
    localStorage.setItem("heading", JSON.stringify(heading));
    let stored_heading = JSON.parse(localStorage.getItem("heading"));
    console.log(stored_heading.x_heading);
    console.log(stored_heading.y_heading)
}

function renderHeading() {

    //assign element vars
    let x = document.getElementById("x-heading");
    let y = document.getElementById("y-heading");

    let newHeading = JSON.parse(localStorage.getItem("heading"));

    //renders new coordinates to user
    x.innerHTML = newHeading.x_heading;
    y.innerHTML = newHeading.y_heading;
}

function renderDirectionInput() {
    let slider = document.getElementById("direction-input");
    let output = document.getElementById("direction-value");
    output.innerHTML = slider.value;
}

function createNewLog() {

    let new_log = JSON.parse(localStorage.getItem("heading"));
    let ul = document.getElementById("data-log");
    let li = document.createElement("li");
    li.setAttribute("class", "log");
    li.innerHTML= new_log.x_heading + new_log.y_heading;
    ul.appendChild(li);
}

function createGrid(size) {
}
