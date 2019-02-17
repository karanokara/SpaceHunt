//File contains functions to collect and handoff user entered data

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
}

function updateHeading() {

    //assign element vars
    let x = document.getElementById("x-heading");
    let y = document.getElementById("y-heading");

    let newHeading = JSON.parse(localStorage.getItem("heading"));

    //renders new coordinates to user
    x.innerHTML = newHeading ? newHeading.x_heading : 0;
    y.innerHTML = newHeading ? newHeading.y_heading : 0;
}

function showDirectionInput() {
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
