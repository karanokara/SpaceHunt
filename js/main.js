


// Size of map can be configure from setup file later
window.map = new GameMap( 128 );


// when DOM loaded, call this
window.onload = function () {

    // setup the game 
    // var data = setup();

    // set the ship obj as global
    window.oldSpice = new Ship( 0, 0, 1000, 100, 1000, 1, false );
    updateHeading();

    //important that pushes to tickObjects happens nearly last
    ctrecipe.tickObjects.push(function(){ Collision(window.oldSpice.x, window.oldSpice.y);});
    ctrecipe.tick();












    gameSetup();
}

/**
 * setup the game
 */
function gameSetup () {

    // when click the start btn
    document.querySelectorAll( ".game-start-btn" )[0].onclick = function () {
        var setupPage = document.querySelectorAll( ".setup-game" )[0];
        setupPage.attributes.class.value += " hide"

    };
}