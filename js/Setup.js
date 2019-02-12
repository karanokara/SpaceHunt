//TODO: break into smaller functions
function developerModeInit() {
    var devMode = document.createElement("FORM");
    devMode.setAttribute("id", "developerMode");
    document.body.appendChild(devMode);
  
    var coordinateLabel = document.createElement("P");
    var coordinateLabelText = document.createTextNode("Coordinates: ");
    coordinateLabel.appendChild(coordinateLabelText);
    
    var xInput = document.createElement("INPUT");
    xInput.setAttribute("type", "text");
    xInput.setAttribute("value", "0");
    xInput.setAttribute("size", "3");
    coordinateLabel.appendChild(xInput);
  
    var coordinateComma = document.createElement("SPAN");
    var coordinateCommaText = document.createTextNode(", ");
    coordinateComma.appendChild(coordinateCommaText);
    coordinateLabel.appendChild(coordinateComma);
    
    var yInput = document.createElement("INPUT");
    yInput.setAttribute("type", "text");
    yInput.setAttribute("value", "0");
    yInput.setAttribute("size", "3");
    coordinateLabel.appendChild(yInput);
    
    document.getElementById("developerMode").appendChild(coordinateLabel);
    
    var energyLabel = document.createElement("P");
    var energyLabelText = document.createTextNode("Energy: ");
    energyLabel.appendChild(energyLabelText);
    
    var energyInput = document.createElement("INPUT");
    energyInput.setAttribute("type", "text");
    energyInput.setAttribute("value", "1000");
    energyInput.setAttribute("size", "6");
    energyLabel.appendChild(energyInput);
    
    document.getElementById("developerMode").appendChild(energyLabel);
    
    var supplyLabel = document.createElement("P");
    var supplyLabelText = document.createTextNode("Supplies: ");
    supplyLabel.appendChild(supplyLabelText);
    
    var supplyInput = document.createElement("INPUT");
    supplyInput.setAttribute("type", "text");
    supplyInput.setAttribute("value", "100");
    supplyInput.setAttribute("size", "3");
    supplyLabel.appendChild(supplyInput);
    
    var supplyPercent = document.createElement("SPAN");
    var supplyPercentText = document.createTextNode("%");
    supplyPercent.appendChild(supplyPercentText);
    supplyLabel.appendChild(supplyPercent);
    
    document.getElementById("developerMode").appendChild(supplyLabel);
    
    var creditLabel = document.createElement("P");
    var creditLabelText = document.createTextNode("Credits: ");
    creditLabel.appendChild(creditLabelText);
    
    var creditInput = document.createElement("INPUT");
    creditInput.setAttribute("type", "text");
    creditInput.setAttribute("value", "1000");
    creditInput.setAttribute("size", "6");
    creditLabel.appendChild(creditInput);
    
    document.getElementById("developerMode").appendChild(creditLabel);
    
    var wormholeLabel = document.createElement("P");
    var wormholeLabelText = document.createTextNode("Wormhole Behavior: ");
    wormholeLabel.appendChild(wormholeLabelText);
    
    var fixedRadio = document.createElement("INPUT");
    fixedRadio.setAttribute("type", "radio");
    wormholeLabel.appendChild(fixedRadio);
  
    var fixedLabel = document.createElement("SPAN");
    var fixedLabelText = document.createTextNode(" Fixed ");
    fixedLabel.appendChild(fixedLabelText);
    wormholeLabel.appendChild(fixedLabel);
    
    var randomRadio = document.createElement("INPUT");
    randomRadio.setAttribute("type", "radio");
    wormholeLabel.appendChild(randomRadio);
    
    var randomLabel = document.createElement("SPAN");
    var randomLabelText = document.createTextNode(" Random ");
    randomLabel.appendChild(randomLabelText);
    wormholeLabel.appendChild(randomLabel);
    
    document.getElementById("developerMode").appendChild(wormholeLabel);
    
    var gameplayLabel = document.createElement("P");
    var gameplayLabelText = document.createTextNode("Gameplay mode: ");
    gameplayLabel.appendChild(gameplayLabelText);
    
    var normalRadio = document.createElement("INPUT");
    normalRadio.setAttribute("type", "radio");
    gameplayLabel.appendChild(normalRadio);
  
    var normalLabel = document.createElement("SPAN");
    var normalLabelText = document.createTextNode(" Normal ");
    normalLabel.appendChild(normalLabelText);
    gameplayLabel.appendChild(normalLabel);
    
    var undeadRadio = document.createElement("INPUT");
    undeadRadio.setAttribute("type", "radio");
    gameplayLabel.appendChild(undeadRadio);
    
    var undeadLabel = document.createElement("SPAN");
    var undeadLabelText = document.createTextNode(" Never Dies");
    undeadLabel.appendChild(undeadLabelText);
    gameplayLabel.appendChild(undeadLabel);
    
    document.getElementById("developerMode").appendChild(gameplayLabel);
    
    var mapSizeLabel = document.createElement("P");
    var mapSizeLabelText = document.createTextNode("Map size: ");
    mapSizeLabel.appendChild(mapSizeLabelText);
    
    var mapSizeInput = document.createElement("INPUT");
    mapSizeInput.setAttribute("type", "text");
    mapSizeInput.setAttribute("value", "100");
    mapSizeInput.setAttribute("size", "3");
    mapSizeLabel.appendChild(mapSizeInput);
    
    document.getElementById("developerMode").appendChild(mapSizeLabel);
  }
//Get random integer between 0 and max
function randomInt(max) {
    return Math.floor((Math.random() * max));
}