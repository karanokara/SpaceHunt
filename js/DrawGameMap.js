//tableCreate();

var mapObj, mapDiv, mapTable, tableRow, tableCol;

//mapTable = document.getElementById("gameMap");
function ClearGrid(parent)
{
    for(let i = 0; i < parent.length; ++i)
    {
        parent[i].className = "grid-block";
    }
}

function DrawGameMap(parent)
{
    let xCenter = window.oldSpice.x;
    let yCenter = window.oldSpice.y;
    let size = Math.sqrt(parent.length-1);

    let centerCell = Math.floor((parent.length-1)/2);
    ClearGrid(parent);
    for(let i = 0; i<parent.length-1; ++i)
    {
        let cellY = (yCenter - 1) + Math.floor(i/size);
        let cellX = (xCenter - 1) + i%size;

        if(i == centerCell)
        {
            parent[i+1].className += " " + "old-spice";
        }
        else if(cellX < 0 || cellY < 0 || cellX > map.size || cellY > map.size) 
        {
            parent[i+1].className += " " + "out-of-bounds";
        }
        else 
        {
            mapObj = map.contents(cellX, cellY);
            if(mapObj)
            {
                parent[i+1].className += " " + mapObj.objType;
            }
        }
    }
}