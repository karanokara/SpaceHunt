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
    this.objType= type;
    this.radius = radius;
}

MapObject.prototype.Collide = function() 
{
    console.log("Logging MapObject collision");
}

/*----------------------------------------------------*/

function WormHole() {}

WormHole.prototype = new MapObject("Wormhole", 0);

WormHole.prototype.Collide = function()
{
    MapObject.prototype.Collide.call(this);
    alert("You fell into a wormhole!");

    //TODO: validation mode flag to use a fixed wormhole jump
    if(true)
    {
        xrand = Math.ceil(Math.random() * map.size - 2); //change position of oldSpice to xrand, yrand (avoid borders at x=0|127 and y =0|127)
        yrand = Math.ceil(Math.random() * map.size - 2);
        oldSpice.x = xrand;
        oldSpice.y = yrand;
    }
    else
    {
        oldSpice.x = 1;
        oldSpice.y = 1;
    }
}

/*----------------------------------------------------*/

function Asteroid(){}

Asteroid.prototype = new MapObject('Asteroid', 0);

Asteroid.prototype.DamageShip = function() 
{
    alert("You skimmed an asteroid and took damage!");
}

Asteroid.prototype.DestroyShip = function() 
{
    alert("You slammed into an asteroid and blew up! You lose!");
    ctrecipe.GameOver();
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

/*----------------------------------------------------*/

function MeteorShower() {}

MeteorShower.prototype = new MapObject("MeteorShower", 0);

/*----------------------------------------------------*/

function AbFreighter() {}

AbFreighter.prototype = new MapObject("AbFreighter", 0);

/*----------------------------------------------------*/

function Planet(name, x, y)
{
    this.name = name;
    this.x = x;
    this.y = y;
}

Planet.prototype = new MapObject('Planet', 1);

Planet.prototype.Collide = function() 
{

}

Planet.prototype.EnterOrbit = function() 
{
    alert("You have entered the orbit of " + this.name);
    //update energy_cost/move here
    if(oldSpice.x == this.x && oldSpice.y == this.y)
    {
        //TODO: oldSpice visits the planet
    }
}

/*----------------------------------------------------*/

function Ryzen(){};

Ryzen.prototype = new Planet('Ryzen');

Ryzen.prototype.Collide = function()
{
    MapObject.prototype.Collide.call(this);
    this.EnterOrbit();
}

/*----------------------------------------------------*/

function Eniac(){};

Eniac.prototype = new Planet('Eniac');

Eniac.prototype.Collide = function()
{
    MapObject.prototype.Collide.call(this);
    this.EnterOrbit();
}

/*----------------------------------------------------*/

function BadMax(){}

BadMax.prototype = new MapObject("BadMax", 0);

BadMax.prototype.Collide = function()
{
    MapObject.prototype.Collide.call(this);
    let eventDecider = Math.random();
    if(eventDecider < 0.5) 
    {
        this.Escape();
    }
    else if( eventDecider < 0.8)
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
    alert("BadMax has destroyed your ship! You lose!");
    ctrecipe.GameOver();
}

BadMax.prototype.Escape = function()
{
    alert("You have run away from BadMax!");
}

/*----------------------------------------------------*/

function SpaceStation(attachedStations) 
{
    this.stations = attachedStations; //container for attached-stations 

    //append string representing "sub-stations" attached to SpaceStation
    //use for image representations on game map
    for(let i = 0; i < this.stations.length; ++i)
    {
        this.objType += this.stations[i].type;
    }
}

SpaceStation.prototype = new MapObject("Station", 0);

SpaceStation.prototype.Collide = function()
{
    let i;
    for(i=0; i<this.stations.length; ++i)
    {
        if(this.stations[i].MenuPrompt())
        {
            this.stations[i].Purchase();
        }
    }
}

/*----------------------------------------------------*/

function MuskTesla(energyQuantity, energyPrice) 
{
    this.type = 'T';
    this.energyQuantity = energyQuantity;
    this.energyPrice = energyPrice;
}

MuskTesla.prototype.MenuPrompt = function()
{
    return confirm("MuskTesla Attendant:\n\"Do you want to buy " + this.energyQuantity + " energy for " + this.energyPrice + " credits?\"");
}

MuskTesla.prototype.Purchase = function()
{
    oldSpice.energy += this.energyQuantity;
    oldSpice.supplies -= this.energyPrice;
    alert("MuskTesla Attendant:\n\"Thank you for your patronage, happy trails to you!\"" );
}

/*----------------------------------------------------*/

function MiniMart() 
{
    this.type = 'M';
    this.supplyPrice = 100;
    this.supplyQuantity = 0.1;
}

MiniMart.prototype.MenuPrompt = function()
{
    return confirm("MiniMart Attendant:\n\"Do you want to buy " + this.supplyQuantity*100 + "% supply for " + this.supplyPrice + " credits?\"");
}

MiniMart.prototype.Purchase = function()
{
    oldSpice.supplies += this.supplyQuantity;
    oldSpice.credits -= this.supplyPrice;
    alert("MiniMart Attendant:\n\"Thank you for your patronage, happy trails to you!\"" );
}

/*----------------------------------------------------*/

function RepairDepot() 
{
    this.type = 'R';
    this.repairPrice = 100;
}

RepairDepot.prototype.MenuPrompt = function()
{
    if(oldSpice.isDamaged)
    {
        return confirm("Repair Depot Mechanic:\n\"Do you want to repair your ship damage for " + this.repairPrice + " credits?\"");
    }
    else
    {
        alert("Repair Depot Mechanic:\n\"Your ship is pristine, I refuse your business!\"");
        return false;
    }
}

RepairDepot.prototype.Purchase = function()
{
    oldSpice.isDamaged = false;
    oldSpice.credits -= this.repairPrice;
    alert("Repair Depot Mechanic:\n\"We got the dings out sir, happy trails to you!\"" );
} 