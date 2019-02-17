/*
Bring up modal window to allow custom gameplay settings.
User input modules are loaded and rendered to the DOM.
*/
function developerModeInit() {
    let devModal = document.createElement("DIV");
    devModal.setAttribute("class", "modal-content");
    devModal.setAttribute("id", "devModal");

    document.getElementById("devLoadModal").style.display = "block";

    let devMode = document.createElement("FORM");
    devMode.setAttribute("id", "developerMode");
    devModal.appendChild(devMode);

    document.getElementById("devLoadModal").appendChild(devModal);

    coordinateInit();
    energyInit();
    supplyInit();
    creditInit();
    wormholeInit();
    gameplayInit();
    mapSizeInit();
    submitInit();  
}
  
/*
Create text boxes for x and y coordinate input.
Default coordinates are (0, 0).
*/
function coordinateInit() {
    let coordinateLabel = document.createElement("P");
    let coordinateLabelText = document.createTextNode("Coordinates: ");
    coordinateLabel.appendChild(coordinateLabelText);
    
    let xInput = document.createElement("INPUT");
    xInput.setAttribute("name", "coordinateInput");
    xInput.setAttribute("type", "text");
    xInput.setAttribute("value", "0");
    xInput.setAttribute("size", "3");
    coordinateLabel.appendChild(xInput);
  
    let coordinateComma = document.createElement("SPAN");
    let coordinateCommaText = document.createTextNode(", ");
    coordinateComma.appendChild(coordinateCommaText);
    coordinateLabel.appendChild(coordinateComma);
    
    let yInput = document.createElement("INPUT");
    yInput.setAttribute("name", "coordinateInput");
    yInput.setAttribute("type", "text");
    yInput.setAttribute("value", "0");
    yInput.setAttribute("size", "3");
    coordinateLabel.appendChild(yInput);
    
    document.getElementById("developerMode").appendChild(coordinateLabel);
}
 
/*
Create text box for energy input.
Default value is 1000.
*/
function energyInit() {
    let energyLabel = document.createElement("P");
    let energyLabelText = document.createTextNode("Energy: ");
    energyLabel.appendChild(energyLabelText);
    
    let energyInput = document.createElement("INPUT");
    energyInput.setAttribute("name", "energyInput");
    energyInput.setAttribute("type", "text");
    energyInput.setAttribute("value", "1000");
    energyInput.setAttribute("size", "6");
    energyLabel.appendChild(energyInput);
    
    document.getElementById("developerMode").appendChild(energyLabel);
}
  
/*
Create text box for supply input.
Default value is 100%.
*/
function supplyInit() {
    let supplyLabel = document.createElement("P");
    let supplyLabelText = document.createTextNode("Supplies: ");
    supplyLabel.appendChild(supplyLabelText);
    
    let supplyInput = document.createElement("INPUT");
    supplyInput.setAttribute("name", "supplyInput");
    supplyInput.setAttribute("type", "text");
    supplyInput.setAttribute("value", "100");
    supplyInput.setAttribute("size", "3");
    supplyLabel.appendChild(supplyInput);
    
    let supplyPercent = document.createElement("SPAN");
    let supplyPercentText = document.createTextNode("%");
    supplyPercent.appendChild(supplyPercentText);
    supplyLabel.appendChild(supplyPercent);
    
    document.getElementById("developerMode").appendChild(supplyLabel);
}
  
/*
Create text box for credit input.
Default value is 1000.
*/
function creditInit() {
    let creditLabel = document.createElement("P");
    let creditLabelText = document.createTextNode("Credits: ");
    creditLabel.appendChild(creditLabelText);
    
    let creditInput = document.createElement("INPUT");
    creditInput.setAttribute("name", "creditInput");
    creditInput.setAttribute("type", "text");
    creditInput.setAttribute("value", "1000");
    creditInput.setAttribute("size", "6");
    creditLabel.appendChild(creditInput);
    
    document.getElementById("developerMode").appendChild(creditLabel);
}

/*
Create radio buttons for wormhole input.
If random, coordinates will be randomly generated
each time the user encounters a wormhole.
Defaults to random.
If fixed, text boxes allow coordinates to be manually entered.
When fixed, default coordinate value is (0, 0).
*/
function wormholeInit() { 
    let wormholeLabel = document.createElement("P");
    let wormholeLabelText = document.createTextNode("Wormhole Behavior: ");
    wormholeLabel.appendChild(wormholeLabelText);
    
    let randomRadio = document.createElement("INPUT");
    randomRadio.setAttribute("name", "wormholeInput");
    randomRadio.setAttribute("type", "radio");
    randomRadio.setAttribute("checked", "true");
    wormholeLabel.appendChild(randomRadio);
    
    let randomLabel = document.createElement("SPAN");
    let randomLabelText = document.createTextNode(" Random ");
    randomLabel.appendChild(randomLabelText);
    wormholeLabel.appendChild(randomLabel);
    
    let fixedRadio = document.createElement("INPUT");
    fixedRadio.setAttribute("name", "wormholeInput");
    fixedRadio.setAttribute("type", "radio");
    wormholeLabel.appendChild(fixedRadio);
  
    let fixedLabel = document.createElement("SPAN");
    let fixedLabelText = document.createTextNode(" Fixed ");
    fixedLabel.appendChild(fixedLabelText);
    wormholeLabel.appendChild(fixedLabel);
    
    let wormhole_xInput = document.createElement("INPUT");
    wormhole_xInput.setAttribute("name", "wormholeInput");
    wormhole_xInput.setAttribute("type", "text");
    wormhole_xInput.setAttribute("value", "0");
    wormhole_xInput.setAttribute("size", "3");
    wormholeLabel.appendChild(wormhole_xInput);
  
    let coordinateComma = document.createElement("SPAN");
    let coordinateCommaText = document.createTextNode(", ");
    coordinateComma.appendChild(coordinateCommaText);
    wormholeLabel.appendChild(coordinateComma);
    
    let wormhole_yInput = document.createElement("INPUT");
    wormhole_yInput.setAttribute("name", "wormholeInput");
    wormhole_yInput.setAttribute("type", "text");
    wormhole_yInput.setAttribute("value", "0");
    wormhole_yInput.setAttribute("size", "3");
    wormholeLabel.appendChild(wormhole_yInput);

    document.getElementById("developerMode").appendChild(wormholeLabel);
}
  
/*
Create inputs to set default gameplay behavior.
If "Normal" is selected, user may die.
If "Never dies" is selected, user does not die.
Defaults to "Normal".
*/
function gameplayInit() {
    let gameplayLabel = document.createElement("P");
    let gameplayLabelText = document.createTextNode("Gameplay mode: ");
    gameplayLabel.appendChild(gameplayLabelText);
    
    let normalRadio = document.createElement("INPUT");
    normalRadio.setAttribute("name", "gameplayInput");
    normalRadio.setAttribute("checked", "true");
    normalRadio.setAttribute("type", "radio");
    gameplayLabel.appendChild(normalRadio);
  
    let normalLabel = document.createElement("SPAN");
    let normalLabelText = document.createTextNode(" Normal ");
    normalLabel.appendChild(normalLabelText);
    gameplayLabel.appendChild(normalLabel);
    
    let undeadRadio = document.createElement("INPUT");
    undeadRadio.setAttribute("name", "gameplayInput");
    undeadRadio.setAttribute("type", "radio");
    gameplayLabel.appendChild(undeadRadio);
    
    let undeadLabel = document.createElement("SPAN");
    let undeadLabelText = document.createTextNode(" Never Dies");
    undeadLabel.appendChild(undeadLabelText);
    gameplayLabel.appendChild(undeadLabel);
  
    document.getElementById("developerMode").appendChild(gameplayLabel);
}

/*
Function to initialize map to given size.
Default value is 128.
*/
function mapSizeInit() {
    let mapSizeLabel = document.createElement("P");
    let mapSizeLabelText = document.createTextNode("Map size: ");
    mapSizeLabel.appendChild(mapSizeLabelText);
    
    let mapSizeInput = document.createElement("INPUT");
    mapSizeInput.setAttribute("name", "mapSizeInput");
    mapSizeInput.setAttribute("type", "text");
    mapSizeInput.setAttribute("value", "128");
    mapSizeInput.setAttribute("size", "3");
    mapSizeLabel.appendChild(mapSizeInput);
    
    document.getElementById("developerMode").appendChild(mapSizeLabel);
}
  
/*
Generate submit button.
When clicked, calls the developerModeSubmit function.
*/
function submitInit() {
    let submitLabel = document.createElement("P");
      
    let submitButton = document.createElement("INPUT");
    submitButton.setAttribute("name", "submitButton");
    submitButton.setAttribute("type", "button");
    submitButton.setAttribute("value", "Save Changes");
    submitButton.onclick = function() { developerModeSubmit() };
    submitLabel.appendChild(submitButton);
    
    document.getElementById("developerMode").appendChild(submitLabel);
}

/*
Read all values from developer mode form.
Set ship coordinates, energy, supplies, and credit.
Set wormhole behavior and gameplay mode.
Initialize map to proper size.
*/
function developerModeSubmit() {
    let coordinates = document.getElementsByName("coordinateInput");
    let energy = document.getElementsByName("energyInput");
    let supplies = document.getElementsByName("supplyInput");
    let credits = document.getElementsByName("creditInput");
    let wormhole = document.getElementsByName("wormholeInput");
    let gameplay = document.getElementsByName("gameplayInput");
    let mapSize = document.getElementsByName("mapSizeInput");

    ship.x = coordinates[0];
    ship.y = coordinates[1];
    ship.energy = energy[0];
    ship.supplies = supplies[0];
    ship.credit = credits[0];

    document.getElementById("devLoadModal").style.display = "none";
    document.getElementById("devLoadModal").removeChild(document.getElementById("devModal"));
    //set flags in global ctrecipe (GameMode) object that
    //WormHole Collide method can reference
    if(wormhole[1].checked)
    {
        ctrecipe.WormholeFixed = true;
        ctrecipe.WormholeX = wormhole[2].value;
        ctrecipe.WormholeY = wormhole[2].value;
    }

    oldSpice.x = coordinates[0];
    oldSpice.y = coordinates[1];
    oldSpice.energy = energy[0];
    oldSpice.supplies = supplies[0];
    oldSpice.credit = credits[0];
}