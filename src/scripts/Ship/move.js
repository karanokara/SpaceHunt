
const MAXSIZE = 100;   // Not Sure where MAXSIZE needs to go, but if we move it, need to "import" it to this file.
OldSpice = new Ship(10, 20);    // starting location


function move(r,  degrees) {
    var radians = degrees * (Math.PI / 180);
    OldSpice.x += Math.round(r * Math.cos(radians));
    OldSpice.y += Math.round(r * Math.sin(radians));

    // the move cost energy regardless of the outcome of the destination, do this every time.
    OldSpice.supplies -= 2;

    switch (OldSpice.engine) {
        case "basic":
            OldSpice.energy -= (OldSpice.isDamaged) ? 50 * r : 10 * r;
            break;
        case "DeNiro":
            OldSpice.energy -= (OldSpice.isDamaged) ? 25 * r : 5 * r;
            break;
        case "Mucho-DeNiro":
            OldSpice.energy -= (OldSpice.isDamaged) ? 5 * r : r;
            break;
        default:
            document.getElementById("noEngine").innerHTML = "This aircraft does not have an engine";
    }

    // make sure that the ship wont pass the 0 boundary or upper boundary
    if (OldSpice.x < 0 || OldSpice.y < 0 || OldSpice.x > MAXSIZE || OldSpice.y > MAXSIZE)
        wormhole();
}





