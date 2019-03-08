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
If "Chance" is selected, always a game of chance.
If "Always" is selected, probability.
Defaults to "Chance".
*/
function gameOfChanceInit () {
    let gameOfChanceLabel = document.createElement( "P" );
    let gameOfChanceLabelText = document.createTextNode( "Game of Chance at Stations: " );
    gameOfChanceLabel.appendChild( gameOfChanceLabelText );

    let normalRadio = document.createElement( "INPUT" );
    normalRadio.setAttribute( "name", "gameOfChanceInput" );
    normalRadio.setAttribute( "checked", "true" );
    normalRadio.setAttribute( "type", "radio" );
    gameOfChanceLabel.appendChild( normalRadio );

    let normalLabel = document.createElement( "SPAN" );
    let normalLabelText = document.createTextNode( " Random " );
    normalLabel.appendChild( normalLabelText );
    gameOfChanceLabel.appendChild( normalLabel );

    let undeadRadio = document.createElement( "INPUT" );
    undeadRadio.setAttribute( "name", "gameOfChanceInput" );
    undeadRadio.setAttribute( "type", "radio" );
    gameOfChanceLabel.appendChild( undeadRadio );

    let undeadLabel = document.createElement( "SPAN" );
    let undeadLabelText = document.createTextNode( " Guaranted" );
    undeadLabel.appendChild( undeadLabelText );
    gameOfChanceLabel.appendChild( undeadLabel );

    document.getElementById( "developerMode" ).appendChild( gameOfChanceLabel );
}

/*
Initialize starting coordinates of Celeron.
*/
function celeronInit () {
    let celeronLabel = document.createElement( "P" );
    let celeronLabelText = document.createTextNode( "Celeron Starting Coordinates: " );
    celeronLabel.appendChild( celeronLabelText );

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
    submitButton.setAttribute( "value", "Save Changes" );
    submitButton.onclick = function () { stationSubmit() };
    stationLabel.appendChild( submitButton );

    document.getElementById( "developerMode" ).appendChild( stationLabel );
}

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
    submitButton.setAttribute( "value", "Save Changes" );
    submitButton.onclick = function () { freighterSubmit() };
    freighterLabel.appendChild( submitButton );

    document.getElementById( "developerMode" ).appendChild( freighterLabel );
}

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
    submitButton.setAttribute( "value", "Save Changes" );
    submitButton.onclick = function () { asteroidSubmit() };
    asteroidLabel.appendChild( submitButton );

    document.getElementById( "developerMode" ).appendChild( asteroidLabel );
}

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
    submitButton.setAttribute( "value", "Save Changes" );
    submitButton.onclick = function () { meteorSubmit() };
    meteorLabel.appendChild( submitButton );

    document.getElementById( "developerMode" ).appendChild( meteorLabel );
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
    submitButton.onclick = function () { locationSubmit() };
    submitLabel.appendChild( submitButton );

    document.getElementById( "developerMode" ).appendChild( submitLabel );
}

/*
Create text box for the player's name for persistent state.
Default value is admin.
*/
function playerNameInit() {
    // makes the label for Player Name :
    let playerNameLabel = document.createElement("LABEL");
    playerNameLabel.setAttribute("for", "playerName");

    // creates the text
    let playerNameLabelText = document.createTextNode("Player Name :");
    playerNameLabel.appendChild(playerNameLabelText);

    // puts the label under the playerNameField
    document.getElementById("playerNameField").appendChild(playerNameLabel);

    // create the input box
    let playerNameInput = document.createElement("INPUT");
    playerNameInput.setAttribute("id", "playerName");
    playerNameInput.setAttribute("name", "playerNameInput");
    playerNameInput.setAttribute("type", "text");
    playerNameInput.setAttribute("size", "10");

    // puts the input boc under the playerNameField also, not under the label.
    document.getElementById("playerNameField").appendChild(playerNameInput);
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
    
    //set flags in global ctrecipe (GameMode) object that
    //WormHole Collide method can reference
    if ( wormhole[1].checked ) {
        ctrecipe.WormholeFixed = true;
        ctrecipe.WormholeX = parseInt( wormhole[2].value );
        ctrecipe.WormholeY = parseInt( wormhole[3].value );
    }

    window.gameData.setupMode = true;
    window.gameData.shipX = parseInt( coordinates[0].value );
    window.gameData.shipY = parseInt( coordinates[1].value );
    window.gameData.shipEnergy = parseInt( energy[0].value );
    window.gameData.shipSupplies = parseInt( supplies[0].value );
    window.gameData.shipCredit = parseInt( credits[0].value );
    window.gameData.shipNormalPlay = gameplay[0].checked;
    window.gameData.mapSize = parseInt( mapSize[0].value );

    document.getElementById( "devLoadModal" ).style.display = "none";
    document.getElementById( "devLoadModal" ).removeChild( document.getElementById( "devModal" ) );

    setLocations();
}

function locationSubmit () {
    let celeron = document.getElementsByName( "celeronInput" );
    let xeon = document.getElementsByName( "xeonInput" );
    let ryzen = document.getElementsByName( "ryzenInput" );

    window.gameData.celeronX = parseInt( celeron[0].value );
    window.gameData.celeronY = parseInt( celeron[1].value );
    window.gameData.xeonX = parseInt( xeon[0].value );
    window.gameData.xeonY = parseInt( xeon[1].value );
    window.gameData.ryzenX = parseInt( ryzen[0].value );
    window.gameData.ryzenY = parseInt( ryzen[1].value );
    
    document.getElementById( "devLoadModal" ).style.display = "none";
    document.getElementById( "devLoadModal" ).removeChild( document.getElementById( "locModal" ) );
}

function stationSubmit () {
    let station = document.getElementsByName ( "stationInput" );

    if (!window.gameData.stations)
        window.gameData.stations = new Set();
    
    let stationX = parseInt( station[2].value );
    let stationY = parseInt( station[3].value );

    window.gameData.stations.add( [stationX, stationY] );

    station[2].value = "";
    station[3].value = "";
}

function freighterSubmit () {
    let freighter = document.getElementsByName ( "freighterInput" );
 
    let freighterX = parseInt( freighter[2].value );
    let freighterY = parseInt( freighter[3].value );

    if (!window.gameData.freighters)
        window.gameData.freighters = new Set();

    window.gameData.freighters.add( [freighterX, freighterY] );

    freighter[2].value = "";
    freighter[3].value = "";
}

function meteorSubmit () {
    let meteor = document.getElementsByName ( "meteorInput" );
    
    let meteorX = parseInt( meteor[2].value );
    let meteorY = parseInt( meteor[3].value ); 
    
    if (!window.gameData.meteors)
        window.gameData.meteors = new Set();

    window.gameData.meteors.add( [meteorX, meteorY] );
    
    meteor[2].value = "";
    meteor[3].value = "";
}

function asteroidSubmit () {
    let asteroid = document.getElementsByName ( "asteroidInput" );

    let asteroidX = parseInt( asteroid[2].value );
    let asteroidY = parseInt( asteroid[3].value );  

    if (!window.gameData.asteroids)
        window.gameData.asteroids = new Set();

    window.gameData.asteroids.add( [ asteroidX, asteroidY ]);

    asteroid[2].value = "";
    asteroid[3].value = "";
}