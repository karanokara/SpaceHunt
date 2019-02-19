/*
    WormHole(), 
    Asteroid(),
    MeteorShower(),
    AbFreighter(),
    Ryzen(),
    Eniac(),
    BadMax(),
    MuskTesla(),
    MiniMart(),
*/

var mapObj,
objIdx,
objCoordx,
objCoordy;

for(let i = 0; i<10; ++i)
{
    switch(i%6)
    {
        case 0:
            mapObj = new SpaceStation([new MuskTesla(100, 1000), new RepairDepot, new MiniMart()]);
            break;

        case 1:
            mapObj = new SpaceStation([new MuskTesla(100, 1000), new RepairDepot()]);
            break;

        case 2:
            mapObj = new SpaceStation([new MuskTesla(100, 1000), new MiniMart()]);
            break;
        
        case 3:
            mapObj = new SpaceStation([new MuskTesla(100, 1000)]);
            break;

        case 4:
            mapObj = new Asteroid();
            break;

        case 5:
            mapObj = new Ryzen();
            break;
    }

    objCoordx = Math.ceil(Math.random()*3);
    objCoordy = Math.ceil(Math.random()*3);

    console.log('Placed ' + mapObj.objType + " at position: " + objCoordx + ' ' + objCoordy);

    map.add(mapObj, objCoordx, objCoordy);
    
}