/*
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
    console.log("Logging MapObject collision");
}



function Asteroid(){};

Asteroid.prototype = new MapObject('Asteroid', 0);

Asteroid.prototype.DamageShip = function() 
{
    alert("You skimmed an asteroid and took damage!");
}

Asteroid.prototype.DestroyShip = function() 
{
    alert("You slammed into and asteroid blew up!");
}

Asteroid.prototype.Collide = function() 
{
    MapObject.prototype.Collide.call(this);
    let eventDecider = Math.random();
    if(eventDecider <= 0.9)
    {
        this.DamageShip();
    }
    else
    {
        this.DestroyShip();
    }
}



function MeteorShower() {}

MeteorShower.prototype = new MapObject("MeteorShower", 0);



function AbFreighter() {}

AbFreighter.prototype = new MapObject("AbFreighter", 0);



function Planet(name)
{
    this.name = name;
}

Planet.prototype = new MapObject('Planet', 1);

Planet.prototype.EnterOrbit = function() 
{
    alert("You have entered the orbit of " + this.name);
}



function Ryzen(){};

Ryzen.prototype = new Planet('Ryzen');

Ryzen.prototype.Collide = function()
{
    MapObject.prototype.Collide.call(this);
    this.EnterOrbit();
}



function Eniac(){};

Eniac.prototype = new Planet('Eniac');

Eniac.prototype.Collide = function()
{
    MapObject.prototype.Collide.call(this);
    this.EnterOrbit();
}



function BadMax(){}

BadMax.prototype = new MapObject("BadMax", 0);

BadMax.prototype.Collide = function()
{
    MapObject.prototype.Collide.call(this);
    let eventDecider = Math.random();
    if(eventDecider <= 0.5) 
    {
        this.Escape();
    }
    else if( eventDecider > 0.5 && eventDecider <= 0.8)
    {
        this.Steal();
    }
    else
    {
        this.DestroyShip();
    }
}

BadMax.prototype.Steal = function()
{
    alert("BadMax has stolen your supplies and credits!");
}

BadMax.prototype.DestroyShip = function()
{
    alert("BadMax has destroyed your ship!");
}

BadMax.prototype.Escape = function()
{
    alert("You have run away from BadMax!");
}



function SpaceStation(type) 
{
    this.objType = type;
}

SpaceStation.prototype = new MapObject("Station", 0);



function MuskTesla() {}

MuskTesla.prototype = new SpaceStation("MuskTesla");



function MiniMart() {}

MiniMart.prototype = new SpaceStation("MiniMart")



function RepairDepot() {}

RepairDepot.prototype = new SpaceStation("RepairDepot")