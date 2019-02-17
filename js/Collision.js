/*
* Collision.js
* Purpose: Tick-compatible function that checks to see if oldSpice collides with any map objects
*
*/

var Collision = function (x_coord,y_coord) {
    if(Collision.caller)
    {
        let colObjCheck = map.contents(x_coord, y_coord);
        if(colObjCheck){
            colObjCheck.Collide();
        }
    }
}