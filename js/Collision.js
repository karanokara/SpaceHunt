    function Collision() {
        var cellObj = map.contents(oldSpice.x, oldSpice.y);
        if(cellObj != null){
            cellObj.Collide();
        }
    }