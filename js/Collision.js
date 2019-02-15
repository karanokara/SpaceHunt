/*
* Collision.js
* Purpose: Tick-compatible function that checks to see if oldSpice collides with any map objects
*
*/

function Collision(x_coord,y_coord) {
    let colObjCheck = map.contents(x_coord, y_coord);
    if(colObjCheck != null){
        colObjCheck.Collide();
    }
}

// add Collision check to tick
ctrecipe.tickObjects.push(Collision(oldSpice.x, oldSpice.y));