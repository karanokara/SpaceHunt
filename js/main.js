// Size of map can be configure from setup file later
window.gameMap = new GameMap( 128 );


// when DOM loaded, call this
window.onload = function () {
    let dev_mode = localStorage.getItem("dev_mode");

    if (dev_mode === null)
        gameSetup();

    renderHeading();

    // setup the game 
    // var data = setup();

    // set the ship obj as global
    window.ship = new Ship( 0, 0, 1000, 100, 1000, 1, false );
};

/**
 * setup the game
 */
function gameSetup () {
    // when click the start btn
    document.querySelectorAll( ".game-start-btn" )[0].onclick = function () {
        localStorage.setItem("dev_mode", "true");
        let dev_mode_chosen = JSON.parse(localStorage.getItem("dev_mode"));

        if (dev_mode_chosen) {
            let setupPage = document.querySelectorAll(".setup-game")[0];
            setupPage.attributes.class.value += "hide";
        }
        console.log(JSON.parse(localStorage.getItem("dev_mode")));
    };
}