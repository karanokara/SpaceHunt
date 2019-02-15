    function Collision(x_coord,y_coord) {
        var colObjCheck = gameMap.contents(x_coord, y_coord);
        if(colObjCheck != null){
            colObjCheck.Collide();
        }
    }