//File contains functions to render the user interface to the user

function submitHeading() {

    //assign element vars
    let direction = document.getElementById("direction-input");
    let magnitude = document.getElementById("magnitude-input");

    //x/y input = new coordinates (assign new location to these)
    window.oldSpice.move(magnitude.value, direction.value);

    //update user with new heading
    updateHeading();

    //create a log of previous location
    createNewLog();
}

//function for rendering the current position to the DOM
function updateHeading() {

    //assign element vars
    let x = document.getElementById("x-heading");
    let y = document.getElementById("y-heading");

    //renders new coordinates to user
    x.innerHTML = window.oldSpice ? window.oldSpice.x : 0;
    y.innerHTML = window.oldSpice ? window.oldSpice.y : 0;
}

//function for rendering the current degree selector value to DOM
function showDirectionInput() {

    let slider = document.getElementById("direction-input");
    let output = document.getElementById("direction-value");
    output.innerHTML = slider.value;
}

//function for generating new data-log list to DOM
function createNewLog() {

    let x_val = window.oldSpice.x;
    let y_val = window.oldSpice.y;
    let ul = document.getElementById("data-log");
    let log = document.createElement("li");
    log.className = "log";
    log.innerHTML= "X: " + x_val + " Y: " + y_val;
    ul.appendChild(log);
}

//function for rendering the sensor grid to the DOM
function createGrid() {
    //target grid container and store to local var
    let sensor_grid = document.getElementById("grid-container");

    //grid changes according to ship sensor upgrade level
    switch (window.oldSpice.sensor.level) {
        case 1: {
            let i = 0;
            for (i=0; i<9; i++) {
                let grid_block = document.createElement("div"); //create new grid-block
                grid_block.className = "grid-block"; //assign grid-block class
                grid_block.setAttribute("id", "grid-key" + i.toString()); //add id 'grid-key(1-i)'
                sensor_grid.appendChild(grid_block);
            }
            sensor_grid.style.gridTemplateColumns = "repeat(3, minmax(20px, 3fr))";
            sensor_grid.style.gridTemplateRows = "repeat(3, minmax(20px, 3fr))";
        } break;

        case 2: {
            let i = 0;
            for (i=0; i<25; i++) {
                let grid_block = document.createElement("div");
                grid_block.className = "grid-block";
                grid_block.setAttribute("id", "grid-key" + i.toString());
                sensor_grid.appendChild(grid_block);
            }
            sensor_grid.style.gridTemplateColumns = "repeat(5, minmax(20px, 3fr))";
            sensor_grid.style.gridTemplateRows = "repeat(5, minmax(20px, 3fr))";
        } break;

        case 3: {
            let i = 0;
            for (i=0; i<49; i++) {
                let grid_block = document.createElement("div");
                grid_block.className = "grid-block";
                grid_block.setAttribute("id", "grid-key" + i.toString());
                sensor_grid.appendChild(grid_block);
            }
            sensor_grid.style.gridTemplateColumns = "repeat(7, minmax(20px, 3fr))";
            sensor_grid.style.gridTemplateRows = "repeat(7, minmax(20px, 3fr))";
        } break;

        default: {
            let i = 0;
            for (i=0; i<9; i++) {
                let grid_block = document.createElement("div");
                grid_block.className = "grid-block";
                grid_block.setAttribute("id", "grid-key" + i.toString());
                sensor_grid.appendChild(grid_block);
            }
            sensor_grid.style.gridTemplateColumns = "repeat(3, minmax(20px, 3fr))";
            sensor_grid.style.gridTemplateRows = "repeat(3, minmax(20px, 3fr))";
        }
    }
}
