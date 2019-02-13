


// Size of map can be configure from setup file later
window.gameMap = new GameMap( 128 );


// when DOM loaded, call this
window.onload = function () {

    // setup the game 
    // var data = setup();

    // set the ship obj as global
    window.ship = new Ship( 0, 0, 1000, 100, 1000, 1, false );
    updateHeading();














    gameSetup();
}

/**
 * setup the game
 */
function gameSetup () {

    // when click the start btn
    document.querySelectorAll( ".game-start-btn" )[0].onclick = function () {
        var setupPage = document.querySelectorAll( ".setup-game" )[0];
        setupPage.style.opacity = 0;
        setTimeout( ( function ( a ) {
            return function () {
                a.style.zIndex = 1;
            }
        } )( setupPage ), 500 );

    };
}