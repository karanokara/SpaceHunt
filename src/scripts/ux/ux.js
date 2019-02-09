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
    updateHeading();
}

function updateHeading() {

    //assign element vars
    let x = document.getElementById("x-heading");
    let y = document.getElementById("y-heading");

    let newHeading = JSON.parse(localStorage.getItem("heading"));

    //DEBUG: values stored to local but don't render????
    console.log(newHeading.x_heading);
    console.log(newHeading.y_heading);

    //renders new coordinates to user
    x.innerHTML = newHeading.x_heading;
    y.innerHTML = newHeading.y_heading;
}
