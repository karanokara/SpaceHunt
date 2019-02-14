/*
*
*
* List of map objects (Entities that occupy space on the GameMap):
** BadMax
** Celestial Artifacts (Planets, Asteroids, Space Stations)
** Meteor Storms
** Abandoned Freighters
** Musk-Tesla Stations (Resources)
** Mini-marts (Resources)
** Repair Depots (Resources)
** Wormholes
** Planet Ryzen
** Planet Celeron
** Planet Xeon
** Planet Eniac
** Sensors
*/


function MapObject(type, radius)
{
    /*Base class for MapObjects*/
    this.objType= name;
    this.radius = radius;
}

MapObject.prototype.Collide = function() 
{
    console.log("Logging MapObject collisions.");
}

function Asteroid(){};

Asteroid.prototype = new MapObject('Asteroid', 0);

Asteroid.prototype.DamageShip = function() {
    alert("You skimmed an asteroid and took damage!");
}

Asteroid.prototype.DestroyShip = function() {
    alert("You slammed into and asteroid blew up!");
}

Asteroid.prototype.Collide = function() {
    let eventDecider = Math.random();
    if(eventDecider <= 0.9){
        this.DamageShip();
    }
    else
    {
        this.DestroyShip();
    }
}


function Planet(name)
{
    this.name = name;
}

Planet.prototype = new MapObject('planet', 1);

Planet.prototype.EnterOrbit = function() {
    alert("You have entered the orbit of " + this.name);
}

function Ryzen(){};

Ryzen.prototype = new Planet('Ryzen');

Ryzen.prototype.Collide = function()
{
    this.EnterOrbit();
}

function Eniac(){};

Eniac.prototype = new Planet('Eniac');

Eniac.prototype.Collide = function()
{
    this.EnterOrbit();
}





/*
function SpaceStation()
{
    var spStationObj = MapObject('space_station', 0);
    var super_Collide = spStationObj.Collide;

    spStationObj.Collide = function() {
        super_Collide();
        alert("You hit a space station!");
    }

    return spStationObj;
}

function BadMax()
{
    var maxObj = MapObject();

    var super_Collide = maxObj.Collide;

    maxObj.Collide = function() 
    {
        super_Collide();
    }

    return maxObj;
}
*/