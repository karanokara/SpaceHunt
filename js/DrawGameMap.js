//tableCreate();

var mapObj, mapDiv, mapTable, tableRow, tableCol;

//mapTable = document.getElementById("gameMap");

function DrawGameMap(parent)
{
    console.log(parent);
    for(let i = 0; i<parent.length; ++i)
    {
        let x = Math.floor(i/3);
        let y = i%3;
        mapObj = map.contents(x,y);
        if(mapObj)
        {
            parent[i].className += " " + mapObj.objType;
        }
    }
}