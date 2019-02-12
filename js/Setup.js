function devSetup() {
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
    energyInput.setAttribute("size", "4");
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
}
//Get random integer between 0 and max
function randomInt(max) {
    return Math.floor((Math.random() * max));
}