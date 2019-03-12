/*
Bring up modal window to allow custom gameplay settings.
User input modules are loaded and rendered to the DOM.
*/
function developerModeInit () {
    let devModal = document.createElement( "DIV" );
    devModal.setAttribute( "class", "modal-content" );
    devModal.setAttribute( "id", "devModal" );

    let devMode = document.createElement( "FORM" );
    devMode.setAttribute( "id", "developerMode" );
    devModal.appendChild( devMode );

    document.getElementById( "devLoadModal" ).appendChild( devModal );

    coordinateInit();
    energyInit();
    supplyInit();
    creditInit();
    wormholeInit();
    gameplayInit();
    gameOfChanceInit();
    mapSizeInit();
    submitInit();

    document.getElementById( "devLoadModal" ).style.display = "block";
}

/*
Initialize modal window to set locations of planets and
celestial objects.
*/
function setLocations () {
    let locModal = document.createElement( "DIV" );
    locModal.setAttribute( "class", "modal-content" );
    locModal.setAttribute( "id", "locModal" );

    let devMode = document.createElement( "FORM" );
    devMode.setAttribute( "id", "developerMode" );
    locModal.appendChild( devMode );

    document.getElementById( "devLoadModal" ).appendChild( locModal );

    celeronInit();
    xeonInit();
    ryzenInit();
    badMaxInit();
    stationInit();
    freighterInit();
    asteroidInit();
    meteorInit();
    locationSubmitInit();

    document.getElementById( "devLoadModal" ).style.display = "block";
}

/*
Create text boxes for x and y coordinate input.
Default coordinates are (0, 0).
*/
function coordinateInit () {
    let coordinateLabel = document.createElement( "P" );
    let coordinateLabelText = document.createTextNode( "Coordinates: " );
    coordinateLabel.appendChild( coordinateLabelText );

    let xInput = document.createElement( "INPUT" );
    xInput.setAttribute( "name", "coordinateInput" );
    xInput.setAttribute( "type", "text" );
    xInput.setAttribute( "value", "0" );
    xInput.setAttribute( "size", "3" );
    coordinateLabel.appendChild( xInput );

    let coordinateComma = document.createElement( "SPAN" );
    let coordinateCommaText = document.createTextNode( ", " );
    coordinateComma.appendChild( coordinateCommaText );
    coordinateLabel.appendChild( coordinateComma );

    let yInput = document.createElement( "INPUT" );
    yInput.setAttribute( "name", "coordinateInput" );
    yInput.setAttribute( "type", "text" );
    yInput.setAttribute( "value", "0" );
    yInput.setAttribute( "size", "3" );
    coordinateLabel.appendChild( yInput );

    document.getElementById( "developerMode" ).appendChild( coordinateLabel );
}

/*
Create text box for energy input.
Default value is 1000.
*/
function energyInit () {
    let energyLabel = document.createElement( "P" );
    let energyLabelText = document.createTextNode( "Energy: " );
    energyLabel.appendChild( energyLabelText );

    let energyInput = document.createElement( "INPUT" );
    energyInput.setAttribute( "name", "energyInput" );
    energyInput.setAttribute( "type", "text" );
    energyInput.setAttribute( "value", "1000" );
    energyInput.setAttribute( "size", "6" );
    energyLabel.appendChild( energyInput );

    document.getElementById( "developerMode" ).appendChild( energyLabel );
}

/*
Create text box for supply input.
Default value is 100%.
*/
function supplyInit () {
    let supplyLabel = document.createElement( "P" );
    let supplyLabelText = document.createTextNode( "Supplies: " );
    supplyLabel.appendChild( supplyLabelText );

    let supplyInput = document.createElement( "INPUT" );
    supplyInput.setAttribute( "name", "supplyInput" );
    supplyInput.setAttribute( "type", "text" );
    supplyInput.setAttribute( "value", "100" );
    supplyInput.setAttribute( "size", "3" );
    supplyLabel.appendChild( supplyInput );

    let supplyPercent = document.createElement( "SPAN" );
    let supplyPercentText = document.createTextNode( "%" );
    supplyPercent.appendChild( supplyPercentText );
    supplyLabel.appendChild( supplyPercent );

    document.getElementById( "developerMode" ).appendChild( supplyLabel );
}

/*
Create text box for credit input.
Default value is 1000.
*/
function creditInit () {
    let creditLabel = document.createElement( "P" );
    let creditLabelText = document.createTextNode( "Credits: " );
    creditLabel.appendChild( creditLabelText );

    let creditInput = document.createElement( "INPUT" );
    creditInput.setAttribute( "name", "creditInput" );
    creditInput.setAttribute( "type", "text" );
    creditInput.setAttribute( "value", "1000" );
    creditInput.setAttribute( "size", "6" );
    creditLabel.appendChild( creditInput );

    document.getElementById( "developerMode" ).appendChild( creditLabel );
}

/*
Create radio buttons for wormhole input.
If random, coordinates will be randomly generated
each time the user encounters a wormhole.
Defaults to random.
If fixed, text boxes allow coordinates to be manually entered.
When fixed, default coordinate value is (0, 0).
*/
function wormholeInit () {
    let wormholeLabel = document.createElement( "P" );
    let wormholeLabelText = document.createTextNode( "Wormhole Behavior: " );
    wormholeLabel.appendChild( wormholeLabelText );

    let randomRadio = document.createElement( "INPUT" );
    randomRadio.setAttribute( "name", "wormholeInput" );
    randomRadio.setAttribute( "type", "radio" );
    randomRadio.setAttribute( "checked", "true" );
    wormholeLabel.appendChild( randomRadio );

    let randomLabel = document.createElement( "SPAN" );
    let randomLabelText = document.createTextNode( " Random " );
    randomLabel.appendChild( randomLabelText );
    wormholeLabel.appendChild( randomLabel );

    let fixedRadio = document.createElement( "INPUT" );
    fixedRadio.setAttribute( "name", "wormholeInput" );
    fixedRadio.setAttribute( "type", "radio" );
    wormholeLabel.appendChild( fixedRadio );

    let fixedLabel = document.createElement( "SPAN" );
    let fixedLabelText = document.createTextNode( " Fixed " );
    fixedLabel.appendChild( fixedLabelText );
    wormholeLabel.appendChild( fixedLabel );

    let wormhole_xInput = document.createElement( "INPUT" );
    wormhole_xInput.setAttribute( "name", "wormholeInput" );
    wormhole_xInput.setAttribute( "type", "text" );
    wormhole_xInput.setAttribute( "value", "0" );
    wormhole_xInput.setAttribute( "size", "3" );
    wormholeLabel.appendChild( wormhole_xInput );

    let coordinateComma = document.createElement( "SPAN" );
    let coordinateCommaText = document.createTextNode( ", " );
    coordinateComma.appendChild( coordinateCommaText );
    wormholeLabel.appendChild( coordinateComma );

    let wormhole_yInput = document.createElement( "INPUT" );
    wormhole_yInput.setAttribute( "name", "wormholeInput" );
    wormhole_yInput.setAttribute( "type", "text" );
    wormhole_yInput.setAttribute( "value", "0" );
    wormhole_yInput.setAttribute( "size", "3" );
    wormholeLabel.appendChild( wormhole_yInput );

    document.getElementById( "developerMode" ).appendChild( wormholeLabel );
}

/*
Create inputs to set default gameplay behavior.
If "Normal" is selected, user may die.
If "Never dies" is selected, user does not die.
Defaults to "Normal".
*/
function gameplayInit () {
    let gameplayLabel = document.createElement( "P" );
    let gameplayLabelText = document.createTextNode( "Gameplay mode: " );
    gameplayLabel.appendChild( gameplayLabelText );

    let normalRadio = document.createElement( "INPUT" );
    normalRadio.setAttribute( "name", "gameplayInput" );
    normalRadio.setAttribute( "checked", "true" );
    normalRadio.setAttribute( "type", "radio" );
    gameplayLabel.appendChild( normalRadio );

    let normalLabel = document.createElement( "SPAN" );
    let normalLabelText = document.createTextNode( " Normal " );
    normalLabel.appendChild( normalLabelText );
    gameplayLabel.appendChild( normalLabel );

    let undeadRadio = document.createElement( "INPUT" );
    undeadRadio.setAttribute( "name", "gameplayInput" );
    undeadRadio.setAttribute( "type", "radio" );
    gameplayLabel.appendChild( undeadRadio );

    let undeadLabel = document.createElement( "SPAN" );
    let undeadLabelText = document.createTextNode( " Never Dies" );
    undeadLabel.appendChild( undeadLabelText );
    gameplayLabel.appendChild( undeadLabel );

    document.getElementById( "developerMode" ).appendChild( gameplayLabel );
}
/*
Create inputs to set default Game of Chance behavior.
If "Chance" is selected, encounters are based on random probability.
If "Always" is selected, always a game of chance.
Defaults to "Chance".
*/
function gameOfChanceInit () {
    let gameOfChanceLabel = document.createElement( "P" );
    let gameOfChanceLabelText = document.createTextNode( "Game of Chance at Stations: " );
    gameOfChanceLabel.appendChild( gameOfChanceLabelText );

    let chanceRadio = document.createElement( "INPUT" );
    chanceRadio.setAttribute( "name", "gameOfChanceInput" );
    chanceRadio.setAttribute( "checked", "true" );
    chanceRadio.setAttribute( "type", "radio" );
    gameOfChanceLabel.appendChild( chanceRadio );

    let chanceLabel = document.createElement( "SPAN" );
    let chanceLabelText = document.createTextNode( " Random " );
    chanceLabel.appendChild( chanceLabelText );
    gameOfChanceLabel.appendChild( chanceLabel );

    let alwaysRadio = document.createElement( "INPUT" );
    alwaysRadio.setAttribute( "name", "gameOfChanceInput" );
    alwaysRadio.setAttribute( "type", "radio" );
    gameOfChanceLabel.appendChild( alwaysRadio );

    let alwaysLabel = document.createElement( "SPAN" );
    let alwaysLabelText = document.createTextNode( " Guaranteed" );
    alwaysLabel.appendChild( alwaysLabelText );
    gameOfChanceLabel.appendChild( alwaysLabel );

    document.getElementById( "developerMode" ).appendChild( gameOfChanceLabel );
}

/*
Initialize starting coordinates of Celeron.
*/
function celeronInit () {
    let celeronLabel = document.createElement( "P" );
    let celeronLabelText = document.createTextNode( "Celeron Starting Coordinates: " );
    celeronLabel.appendChild( celeronLabelText );

    let randomRadio = document.createElement( "INPUT" );
    randomRadio.setAttribute( "name", "celeronInput" );
    randomRadio.setAttribute( "type", "radio" );
    randomRadio.setAttribute( "checked", "true" );
    celeronLabel.appendChild( randomRadio );

    let randomLabel = document.createElement( "SPAN" );
    let randomLabelText = document.createTextNode( " Random " );
    randomLabel.appendChild( randomLabelText );
    celeronLabel.appendChild( randomLabel );

    let fixedRadio = document.createElement( "INPUT" );
    fixedRadio.setAttribute( "name", "celeronInput" );
    fixedRadio.setAttribute( "type", "radio" );
    celeronLabel.appendChild( fixedRadio );

    let fixedLabel = document.createElement( "SPAN" );
    let fixedLabelText = document.createTextNode( " Fixed " );
    fixedLabel.appendChild( fixedLabelText );
    celeronLabel.appendChild( fixedLabel );

    let xInput = document.createElement( "INPUT" );
    xInput.setAttribute( "name", "celeronInput" );
    xInput.setAttribute( "type", "text" );
    xInput.setAttribute( "size", "3" );
    celeronLabel.appendChild( xInput );

    let coordinateComma = document.createElement( "SPAN" );
    let coordinateCommaText = document.createTextNode( ", " );
    coordinateComma.appendChild( coordinateCommaText );
    celeronLabel.appendChild( coordinateComma );

    let yInput = document.createElement( "INPUT" );
    yInput.setAttribute( "name", "celeronInput" );
    yInput.setAttribute( "type", "text" );
    yInput.setAttribute( "size", "3" );
    celeronLabel.appendChild( yInput );

    document.getElementById( "developerMode" ).appendChild( celeronLabel );
}

/*
Initialize starting coordinates of Xeon.
*/
function xeonInit () {
    let xeonLabel = document.createElement( "P" );
    let xeonLabelText = document.createTextNode( "Xeon Starting Coordinates: " );
    xeonLabel.appendChild( xeonLabelText );

    let randomRadio = document.createElement( "INPUT" );
    randomRadio.setAttribute( "name", "xeonInput" );
    randomRadio.setAttribute( "type", "radio" );
    randomRadio.setAttribute( "checked", "true" );
    xeonLabel.appendChild( randomRadio );

    let randomLabel = document.createElement( "SPAN" );
    let randomLabelText = document.createTextNode( " Random " );
    randomLabel.appendChild( randomLabelText );
    xeonLabel.appendChild( randomLabel );

    let fixedRadio = document.createElement( "INPUT" );
    fixedRadio.setAttribute( "name", "xeonInput" );
    fixedRadio.setAttribute( "type", "radio" );
    xeonLabel.appendChild( fixedRadio );

    let fixedLabel = document.createElement( "SPAN" );
    let fixedLabelText = document.createTextNode( " Fixed " );
    fixedLabel.appendChild( fixedLabelText );
    xeonLabel.appendChild( fixedLabel );

    let xInput = document.createElement( "INPUT" );
    xInput.setAttribute( "name", "xeonInput" );
    xInput.setAttribute( "type", "text" );
    xInput.setAttribute( "size", "3" );
    xeonLabel.appendChild( xInput );

    let coordinateComma = document.createElement( "SPAN" );
    let coordinateCommaText = document.createTextNode( ", " );
    coordinateComma.appendChild( coordinateCommaText );
    xeonLabel.appendChild( coordinateComma );

    let yInput = document.createElement( "INPUT" );
    yInput.setAttribute( "name", "xeonInput" );
    yInput.setAttribute( "type", "text" );
    yInput.setAttribute( "size", "3" );
    xeonLabel.appendChild( yInput );

    document.getElementById( "developerMode" ).appendChild( xeonLabel );
}

/*
Initialize starting coordinates of Ryzen.
*/
function ryzenInit () {
    let ryzenLabel = document.createElement( "P" );
    let ryzenLabelText = document.createTextNode( "Ryzen Starting Coordinates: " );
    ryzenLabel.appendChild( ryzenLabelText );

    let randomRadio = document.createElement( "INPUT" );
    randomRadio.setAttribute( "name", "ryzenInput" );
    randomRadio.setAttribute( "type", "radio" );
    randomRadio.setAttribute( "checked", "true" );
    ryzenLabel.appendChild( randomRadio );

    let randomLabel = document.createElement( "SPAN" );
    let randomLabelText = document.createTextNode( " Random " );
    randomLabel.appendChild( randomLabelText );
    ryzenLabel.appendChild( randomLabel );

    let fixedRadio = document.createElement( "INPUT" );
    fixedRadio.setAttribute( "name", "ryzenInput" );
    fixedRadio.setAttribute( "type", "radio" );
    ryzenLabel.appendChild( fixedRadio );

    let fixedLabel = document.createElement( "SPAN" );
    let fixedLabelText = document.createTextNode( " Fixed " );
    fixedLabel.appendChild( fixedLabelText );
    ryzenLabel.appendChild( fixedLabel );

    let xInput = document.createElement( "INPUT" );
    xInput.setAttribute( "name", "ryzenInput" );
    xInput.setAttribute( "type", "text" );
    xInput.setAttribute( "size", "3" );
    ryzenLabel.appendChild( xInput );

    let coordinateComma = document.createElement( "SPAN" );
    let coordinateCommaText = document.createTextNode( ", " );
    coordinateComma.appendChild( coordinateCommaText );
    ryzenLabel.appendChild( coordinateComma );

    let yInput = document.createElement( "INPUT" );
    yInput.setAttribute( "name", "ryzenInput" );
    yInput.setAttribute( "type", "text" );
    yInput.setAttribute( "size", "3" );
    ryzenLabel.appendChild( yInput );

    document.getElementById( "developerMode" ).appendChild( ryzenLabel );
}

/*
Get starting location of stations.
*/
function stationInit () {
    let stationLabel = document.createElement( "P" );
    let stationLabelText = document.createTextNode( "Station: " );
    stationLabel.appendChild( stationLabelText );

    let randomRadio = document.createElement( "INPUT" );
    randomRadio.setAttribute( "name", "stationInput" );
    randomRadio.setAttribute( "type", "radio" );
    randomRadio.setAttribute( "checked", "true" );
    stationLabel.appendChild( randomRadio );

    let randomLabel = document.createElement( "SPAN" );
    let randomLabelText = document.createTextNode( " Random " );
    randomLabel.appendChild( randomLabelText );
    stationLabel.appendChild( randomLabel );

    let fixedRadio = document.createElement( "INPUT" );
    fixedRadio.setAttribute( "name", "stationInput" );
    fixedRadio.setAttribute( "type", "radio" );
    stationLabel.appendChild( fixedRadio );

    let fixedLabel = document.createElement( "SPAN" );
    let fixedLabelText = document.createTextNode( " Fixed " );
    fixedLabel.appendChild( fixedLabelText );
    stationLabel.appendChild( fixedLabel );

    let xInput = document.createElement( "INPUT" );
    xInput.setAttribute( "name", "stationInput" );
    xInput.setAttribute( "type", "text" );
    xInput.setAttribute( "size", "3" );
    stationLabel.appendChild( xInput );

    let coordinateComma = document.createElement( "SPAN" );
    let coordinateCommaText = document.createTextNode( ", " );
    coordinateComma.appendChild( coordinateCommaText );
    stationLabel.appendChild( coordinateComma );

    let yInput = document.createElement( "INPUT" );
    yInput.setAttribute( "name", "stationInput" );
    yInput.setAttribute( "type", "text" );
    yInput.setAttribute( "size", "3" );
    stationLabel.appendChild( yInput );

    let submitButton = document.createElement( "INPUT" );
    submitButton.setAttribute( "name", "stationSubmit" );
    submitButton.setAttribute( "type", "button" );
    submitButton.setAttribute( "value", "Add" );
    submitButton.onclick = function () { stationSubmit() };
    stationLabel.appendChild( submitButton );

    document.getElementById( "developerMode" ).appendChild( stationLabel );
}

/*
Get starting location of freighters.
*/
function freighterInit () {
    let freighterLabel = document.createElement( "P" );
    let freighterLabelText = document.createTextNode( "Freighter: " );
    freighterLabel.appendChild( freighterLabelText );

    let randomRadio = document.createElement( "INPUT" );
    randomRadio.setAttribute( "name", "freighterInput" );
    randomRadio.setAttribute( "type", "radio" );
    randomRadio.setAttribute( "checked", "true" );
    freighterLabel.appendChild( randomRadio );

    let randomLabel = document.createElement( "SPAN" );
    let randomLabelText = document.createTextNode( " Random " );
    randomLabel.appendChild( randomLabelText );
    freighterLabel.appendChild( randomLabel );

    let fixedRadio = document.createElement( "INPUT" );
    fixedRadio.setAttribute( "name", "freighterInput" );
    fixedRadio.setAttribute( "type", "radio" );
    freighterLabel.appendChild( fixedRadio );

    let fixedLabel = document.createElement( "SPAN" );
    let fixedLabelText = document.createTextNode( " Fixed " );
    fixedLabel.appendChild( fixedLabelText );
    freighterLabel.appendChild( fixedLabel );

    let xInput = document.createElement( "INPUT" );
    xInput.setAttribute( "name", "freighterInput" );
    xInput.setAttribute( "type", "text" );
    xInput.setAttribute( "size", "3" );
    freighterLabel.appendChild( xInput );

    let coordinateComma = document.createElement( "SPAN" );
    let coordinateCommaText = document.createTextNode( ", " );
    coordinateComma.appendChild( coordinateCommaText );
    freighterLabel.appendChild( coordinateComma );

    let yInput = document.createElement( "INPUT" );
    yInput.setAttribute( "name", "freighterInput" );
    yInput.setAttribute( "type", "text" );
    yInput.setAttribute( "size", "3" );
    freighterLabel.appendChild( yInput );

    let submitButton = document.createElement( "INPUT" );
    submitButton.setAttribute( "name", "freighterSubmit" );
    submitButton.setAttribute( "type", "button" );
    submitButton.setAttribute( "value", "Add" );
    submitButton.onclick = function () { freighterSubmit() };
    freighterLabel.appendChild( submitButton );

    document.getElementById( "developerMode" ).appendChild( freighterLabel );
}

/*
Get starting locations of asteroids.
*/
function asteroidInit () {
    let asteroidLabel = document.createElement( "P" );
    let asteroidLabelText = document.createTextNode( "Asteroid: " );
    asteroidLabel.appendChild( asteroidLabelText );

    let randomRadio = document.createElement( "INPUT" );
    randomRadio.setAttribute( "name", "asteroidInput" );
    randomRadio.setAttribute( "type", "radio" );
    randomRadio.setAttribute( "checked", "true" );
    asteroidLabel.appendChild( randomRadio );

    let randomLabel = document.createElement( "SPAN" );
    let randomLabelText = document.createTextNode( " Random " );
    randomLabel.appendChild( randomLabelText );
    asteroidLabel.appendChild( randomLabel );

    let fixedRadio = document.createElement( "INPUT" );
    fixedRadio.setAttribute( "name", "asteroidInput" );
    fixedRadio.setAttribute( "type", "radio" );
    asteroidLabel.appendChild( fixedRadio );

    let fixedLabel = document.createElement( "SPAN" );
    let fixedLabelText = document.createTextNode( " Fixed " );
    fixedLabel.appendChild( fixedLabelText );
    asteroidLabel.appendChild( fixedLabel );

    let xInput = document.createElement( "INPUT" );
    xInput.setAttribute( "name", "asteroidInput" );
    xInput.setAttribute( "type", "text" );
    xInput.setAttribute( "size", "3" );
    asteroidLabel.appendChild( xInput );

    let coordinateComma = document.createElement( "SPAN" );
    let coordinateCommaText = document.createTextNode( ", " );
    coordinateComma.appendChild( coordinateCommaText );
    asteroidLabel.appendChild( coordinateComma );

    let yInput = document.createElement( "INPUT" );
    yInput.setAttribute( "name", "asteroidInput" );
    yInput.setAttribute( "type", "text" );
    yInput.setAttribute( "size", "3" );
    asteroidLabel.appendChild( yInput );

    let submitButton = document.createElement( "INPUT" );
    submitButton.setAttribute( "name", "asteroidSubmit" );
    submitButton.setAttribute( "type", "button" );
    submitButton.setAttribute( "value", "Add" );
    submitButton.onclick = function () { asteroidSubmit() };
    asteroidLabel.appendChild( submitButton );

    document.getElementById( "developerMode" ).appendChild( asteroidLabel );
}

/*
Get starting locations of meteors.
*/
function meteorInit () {
    let meteorLabel = document.createElement( "P" );
    let meteorLabelText = document.createTextNode( "Meteor Shower: " );
    meteorLabel.appendChild( meteorLabelText );

    let randomRadio = document.createElement( "INPUT" );
    randomRadio.setAttribute( "name", "meteorInput" );
    randomRadio.setAttribute( "type", "radio" );
    randomRadio.setAttribute( "checked", "true" );
    meteorLabel.appendChild( randomRadio );

    let randomLabel = document.createElement( "SPAN" );
    let randomLabelText = document.createTextNode( " Random " );
    randomLabel.appendChild( randomLabelText );
    meteorLabel.appendChild( randomLabel );

    let fixedRadio = document.createElement( "INPUT" );
    fixedRadio.setAttribute( "name", "meteorInput" );
    fixedRadio.setAttribute( "type", "radio" );
    meteorLabel.appendChild( fixedRadio );

    let fixedLabel = document.createElement( "SPAN" );
    let fixedLabelText = document.createTextNode( " Fixed " );
    fixedLabel.appendChild( fixedLabelText );
    meteorLabel.appendChild( fixedLabel );

    let xInput = document.createElement( "INPUT" );
    xInput.setAttribute( "name", "meteorInput" );
    xInput.setAttribute( "type", "text" );
    xInput.setAttribute( "size", "3" );
    meteorLabel.appendChild( xInput );

    let coordinateComma = document.createElement( "SPAN" );
    let coordinateCommaText = document.createTextNode( ", " );
    coordinateComma.appendChild( coordinateCommaText );
    meteorLabel.appendChild( coordinateComma );

    let yInput = document.createElement( "INPUT" );
    yInput.setAttribute( "name", "meteorInput" );
    yInput.setAttribute( "type", "text" );
    yInput.setAttribute( "size", "3" );
    meteorLabel.appendChild( yInput );

    let submitButton = document.createElement( "INPUT" );
    submitButton.setAttribute( "name", "meteorSubmit" );
    submitButton.setAttribute( "type", "button" );
    submitButton.setAttribute( "value", "Add" );
    submitButton.onclick = function () { meteorSubmit() };
    meteorLabel.appendChild( submitButton );

    document.getElementById( "developerMode" ).appendChild( meteorLabel );
}

/*
Get starting locations of BadMax.
*/
function badMaxInit () {
    let badMaxLabel = document.createElement( "P" );
    let badMaxLabelText = document.createTextNode( "BadMax: " );
    badMaxLabel.appendChild( badMaxLabelText );

    let randomRadio = document.createElement( "INPUT" );
    randomRadio.setAttribute( "name", "badMaxInput" );
    randomRadio.setAttribute( "type", "radio" );
    randomRadio.setAttribute( "checked", "true" );
    badMaxLabel.appendChild( randomRadio );

    let randomLabel = document.createElement( "SPAN" );
    let randomLabelText = document.createTextNode( " Random " );
    randomLabel.appendChild( randomLabelText );
    badMaxLabel.appendChild( randomLabel );

    let fixedRadio = document.createElement( "INPUT" );
    fixedRadio.setAttribute( "name", "badMaxInput" );
    fixedRadio.setAttribute( "type", "radio" );
    badMaxLabel.appendChild( fixedRadio );

    let fixedLabel = document.createElement( "SPAN" );
    let fixedLabelText = document.createTextNode( " Fixed " );
    fixedLabel.appendChild( fixedLabelText );
    badMaxLabel.appendChild( fixedLabel );

    let xInput = document.createElement( "INPUT" );
    xInput.setAttribute( "name", "badMaxInput" );
    xInput.setAttribute( "type", "text" );
    xInput.setAttribute( "size", "3" );
    badMaxLabel.appendChild( xInput );

    let coordinateComma = document.createElement( "SPAN" );
    let coordinateCommaText = document.createTextNode( ", " );
    coordinateComma.appendChild( coordinateCommaText );
    badMaxLabel.appendChild( coordinateComma );

    let yInput = document.createElement( "INPUT" );
    yInput.setAttribute( "name", "badMaxInput" );
    yInput.setAttribute( "type", "text" );
    yInput.setAttribute( "size", "3" );
    badMaxLabel.appendChild( yInput );

    document.getElementById( "developerMode" ).appendChild( badMaxLabel );
}

/*
Function to initialize map to given size.
Default value is 128.
*/
function mapSizeInit () {
    let mapSizeLabel = document.createElement( "P" );
    let mapSizeLabelText = document.createTextNode( "Map size: " );
    mapSizeLabel.appendChild( mapSizeLabelText );

    let mapSizeInput = document.createElement( "INPUT" );
    mapSizeInput.setAttribute( "name", "mapSizeInput" );
    mapSizeInput.setAttribute( "type", "text" );
    mapSizeInput.setAttribute( "value", "128" );
    mapSizeInput.setAttribute( "size", "3" );
    mapSizeLabel.appendChild( mapSizeInput );

    document.getElementById( "developerMode" ).appendChild( mapSizeLabel );
}

/*
Generate submit button.
When clicked, calls the developerModeSubmit function.
*/
function submitInit () {
    let submitLabel = document.createElement( "P" );

    let submitButton = document.createElement( "INPUT" );
    submitButton.setAttribute( "name", "submitButton" );
    submitButton.setAttribute( "type", "button" );
    submitButton.setAttribute( "value", "Save Changes" );
    submitButton.setAttribute( "class", "btn btn-primary" );
    submitButton.onclick = function () { developerModeSubmit() };
    submitLabel.appendChild( submitButton );

    document.getElementById( "developerMode" ).appendChild( submitLabel );
}

/*
Generate location submission button.
When clicked, calls the locationSubmit() function.
*/
function locationSubmitInit () {
    let submitLabel = document.createElement( "P" );

    let submitButton = document.createElement( "INPUT" );
    submitButton.setAttribute( "name", "submitButton" );
    submitButton.setAttribute( "type", "button" );
    submitButton.setAttribute( "value", "Save Changes" );
    submitButton.setAttribute( "class", "btn btn-primary" );
    submitButton.onclick = function () { locationSubmit() };
    submitLabel.appendChild( submitButton );

    document.getElementById( "developerMode" ).appendChild( submitLabel );
}

/*
Create text box for the player's name for persistent state.
Default value is admin.
*/
function playerNameInit () {

    // makes the label for Player Name :
    let playerNameLabel = document.createElement( "LABEL" );
    playerNameLabel.setAttribute( "for", "playerName" );

    // creates the text
    let playerNameLabelText = document.createTextNode( "Player Name :" );
    playerNameLabel.appendChild( playerNameLabelText );

    // puts the label under the playerNameField
    document.getElementById( "playerNameField" ).appendChild( playerNameLabel );

    // create the input box
    let playerNameInput = document.createElement( "INPUT" );
    playerNameInput.setAttribute( "id", "playerName" );
    playerNameInput.setAttribute( "name", "playerNameInput" );
    playerNameInput.setAttribute( "type", "text" );
    playerNameInput.setAttribute( "size", "10" );

    // puts the input boc under the playerNameField also, not under the label.
    document.getElementById( "playerNameField" ).appendChild( playerNameInput );
}

/*
Read all values from developer mode form.
Set ship coordinates, energy, supplies, and credit.
Set wormhole behavior and gameplay mode.
Initialize map to proper size.
*/
function developerModeSubmit () {
    let coordinates = document.getElementsByName( "coordinateInput" );
    let energy = document.getElementsByName( "energyInput" );
    let supplies = document.getElementsByName( "supplyInput" );
    let credits = document.getElementsByName( "creditInput" );
    let wormhole = document.getElementsByName( "wormholeInput" );
    let gameplay = document.getElementsByName( "gameplayInput" );
    let mapSize = document.getElementsByName( "mapSizeInput" );
    playGameOfChance = document.getElementsByName( "gameOfChanceInput" );

    let sizeM = parseInt(mapSize[0].value);
    let coordX = parseInt(coordinates[0].value);
    let coordY = parseInt(coordinates[1].value);
    let wormX = parseInt(wormhole[2].value);
    let wormY = parseInt(wormhole[3].value);

    if ( isNaN(sizeM) ) {
        alert ( "Please enter a number for the map size!" );
        return;
    }

    if ( sizeM < 9 || sizeM > 255 ) {
        alert( "Please enter a map size between 9 and 255!" );
        return;
    }

    if ( isNaN(coordX) || isNaN(coordY) ) {
        alert( "Please enter numbers for starting coordinates!" );
        return;
    }

    if ( isNaN(wormX) || isNaN(wormY) ) {
        alert( "Please enter numbers for wormhole coordinates!" );
        return;
    }

    if ( coordX < 0 || coordX >= sizeM || coordY < 0 || coordY >= sizeM ) {
        alert( "Please enter starting coordinates between 0 and " + (sizeM - 1) );
        return;
    }

    if ( wormX < 0 || wormX >= sizeM || wormY < 0 || wormY >= sizeM ) {
        alert ( "Please enter wormhole coordinates between 0 and " + (sizeM - 1) );
        return;
    }

    //set flags in global ctrecipe (GameMode) object that
    //WormHole Collide method can reference
    if ( wormhole[1].checked ) {
        ctrecipe.WormholeFixed = true;
        ctrecipe.WormholeX = wormX;
        ctrecipe.WormholeY = wormY;
    }

    window.gameData.shipX = coordX;
    window.gameData.shipY = coordY;
    window.gameData.shipEnergy = parseInt( energy[0].value );
    window.gameData.shipSupplies = parseInt( supplies[0].value );
    window.gameData.shipCredit = parseInt( credits[0].value );
    window.gameData.shipNormalPlay = gameplay[0].checked;
    window.gameData.mapSize = sizeM; 

    document.getElementById( "devLoadModal" ).style.display = "none";
    document.getElementById( "devLoadModal" ).removeChild( document.getElementById( "devModal" ) );

    setLocations();
}

/*
Submit locations of all planets.
Checks for valid input before continuing.
*/
function locationSubmit () {
    let celeron = document.getElementsByName( "celeronInput" );
    let xeon = document.getElementsByName( "xeonInput" );
    let ryzen = document.getElementsByName( "ryzenInput" );
    let station = document.getElementsByName( "stationInput" );
    let freighter = document.getElementsByName( "freighterInput" );
    let meteor = document.getElementsByName( "meteorInput" );
    let asteroid = document.getElementsByName( "asteroidInput" );
    let badMax = document.getElementsByName( "badMaxInput" );

    let cX = parseInt( celeron[2].value );
    let cY = parseInt( celeron[3].value );
    let xX = parseInt( xeon[2].value );
    let xY = parseInt( xeon[3].value );
    let rX = parseInt( ryzen[2].value );
    let rY = parseInt( ryzen[3].value );
    let bX = parseInt ( badMax[2].value );
    let bY = parseInt ( badMax[3].value );
    let sizeM = window.gameData.mapSize;

    if ( celeron[1].checked ) {
        if ( isNaN(cX) || isNaN (cY) ) {
            alert ( "Please enter numbers for Celeron coordinates." );
            return;
        }

        if ( cX < 0 || cX >= sizeM || cY < 0 || cY >= sizeM) {
            alert( "Please starting coordinates of Celeron between 0 and " + (sizeM - 1) );
            return;
        }
    }

    if ( xeon[1].checked ) {
        if ( isNaN(xX) || isNaN (xY) ) {
            alert ( "Please enter numbers for Xeon coordinates." );
            return;
        }

        if ( xX < 0 || xX >= sizeM || xY < 0 || xY >= sizeM) {
            alert( "Please starting coordinates of Xeon between 0 and " + (sizeM - 1) );
            return;
        }
    }

    if ( ryzen[1].checked ) {
        if ( isNaN(rX) || isNaN (rY) ) {
            alert ( "Please enter numbers for Ryzen coordinates." );
            return;
        }

        if ( rX < 0 || rX >= sizeM || rY < 0 || rY >= sizeM) {
            alert( "Please starting coordinates of Ryzen between 0 and " + (sizeM - 1) );
            return;
        }
    }

    if ( badMax[1].checked ) {
        if ( isNaN(bX) || isNaN (bY) ) {
            alert ( "Please enter numbers for BadMax coordinates." );
            return;
        }

        if ( bX < 0 || bX >= sizeM || bY < 0 || bY >= sizeM) {
            alert( "Please starting coordinates of BadMax between 0 and " + (sizeM - 1) );
            return;
        }
    }
    if ( station[0].checked ) window.gameData.stationRandom = true;
    if ( freighter[0].checked ) window.gameData.freighterRandom = true;
    if ( meteor[0].checked ) window.gameData.meteorRandom = true;
    if ( asteroid[0].checked ) window.gameData.asteroidRandom = true;

    window.gameData.celeronX = cX; 
    window.gameData.celeronY = cY;
    window.gameData.xeonX = xX;
    window.gameData.xeonY = xY;
    window.gameData.ryzenX = rX;
    window.gameData.ryzenY = rY;
    window.gameData.badMaxX = bX;
    window.gameData.badMaxY = bY;

    document.getElementById( "devLoadModal" ).style.display = "none";
    document.getElementById( "devLoadModal" ).removeChild( document.getElementById( "locModal" ) );
}

/*
Submit entered values for space station location.
Adds station to gameData structure.
*/
function stationSubmit () {
    let station = document.getElementsByName( "stationInput" );
    let sizeM = window.gameData.mapSize;

    if ( station[1].checked ) {
        let stationX = parseInt( station[2].value );
        let stationY = parseInt( station[3].value );
        
        if ( isNaN(stationX) || isNaN(stationY) ) {
            alert ( "Please enter numbers for station coordinates!" )
            return;
        }

        if ( stationX < 0 || stationX >= sizeM || stationY < 0 || stationY >= sizeM ) {
            alert ( "Please enter coordinates between 0 and " + (sizeM - 1) );
            return;
        }

        if ( !window.gameData.stations )
            window.gameData.stations = new Set();

        window.gameData.stations.add( [stationX, stationY] );

        station[2].value = "";
        station[3].value = "";

        window.gameData.stationRandom = false;
    }

    else window.gameData.stationRandom = true;
}

/*
Submit entered values for abandoned freighter location.
Adds freighter to gameData structure.
*/
function freighterSubmit () {
    let freighter = document.getElementsByName( "freighterInput" );

    if ( freighter[1].checked ) {
        let freighterX = parseInt( freighter[2].value );
        let freighterY = parseInt( freighter[3].value );
        let sizeM = window.gameData.mapSize;

        if ( isNaN(freighterX) || isNaN(freighterY) ) {
            alert ( "Please enter numbers for freighter coordinates!" )
            return;
        }

        if ( freighterX < 0 || freighterX >= sizeM || freighterY < 0 || freighterY >= sizeM ) {
            alert ( "Please enter coordinates between 0 and " + (sizeM - 1) );
            return;
        }

        if ( !window.gameData.freighters )
            window.gameData.freighters = new Set();

        window.gameData.freighters.add( [freighterX, freighterY] );

        freighter[2].value = "";
        freighter[3].value = "";

        window.gameData.freighterRandom = false;
    }

    else window.gameData.freighterRandom = true;
}

/*
Submit entered values for meteor location.
Adds meteor to gameData structure.
*/
function meteorSubmit () {
    let meteor = document.getElementsByName( "meteorInput" );

    if ( meteor[1].checked ) {
        let meteorX = parseInt( meteor[2].value );
        let meteorY = parseInt( meteor[3].value );
        let sizeM = window.gameData.mapSize;

        if ( isNaN(meteorX) || isNaN(meteorY) ) {
            alert ( "Please enter numbers for meteor coordinates!" )
            return;
        }

        if ( meteorX < 0 || meteorX >= sizeM || meteorY < 0 || meteorY >= sizeM ) {
            alert ( "Please enter coordinates between 0 and " + (sizeM - 1) );
            return;
        }

        if ( !window.gameData.meteors )
            window.gameData.meteors = new Set();

        window.gameData.meteors.add( [meteorX, meteorY] );

        meteor[2].value = "";
        meteor[3].value = "";

        window.gameData.meteorRandom = false;
    }

    else window.gameData.meteorRandom = true;
}

/*
Submit entered values for asteroid location.
Adds asteroid to gameData structure.
*/
function asteroidSubmit () {
    let asteroid = document.getElementsByName( "asteroidInput" );

    if ( asteroid[1].checked ) {
        let asteroidX = parseInt( asteroid[2].value );
        let asteroidY = parseInt( asteroid[3].value );
        let sizeM = window.gameData.mapSize;

        if ( isNaN(asteroidX) || isNaN(asteroidY) ) {
            alert ( "Please enter numbers for asteroid coordinates!" )
            return;
        }

        if ( asteroidX < 0 || asteroidX >= sizeM || asteroidY < 0 || asteroidY >= sizeM ) {
            alert ( "Please enter coordinates between 0 and " + (sizeM - 1) );
            return;
        }

        if ( !window.gameData.asteroids )
            window.gameData.asteroids = new Set();

        window.gameData.asteroids.add( [asteroidX, asteroidY] );

        asteroid[2].value = "";
        asteroid[3].value = "";

        window.gameData.asteroidRandom = false;
    }

    else window.gameData.asteroidRandom = true;
}