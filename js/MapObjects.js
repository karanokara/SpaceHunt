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

function MapObject ( type, radius ) {
    /*Base class for MapObjects*/
    this.objType = type;
    this.radius = radius;
}

MapObject.prototype.Collide = function () {
    console.log( "Logging MapObject collision" );
}

/*----------------------------------------------------*/

function WormHole () { }

WormHole.prototype = new MapObject( "Wormhole", 0 );

WormHole.prototype.Collide = function () {
    MapObject.prototype.Collide.call( this );
    alert( "You fell into a wormhole!" );

    if ( ctrecipe.WormholeFixed ) {
        oldSpice.x = ctrecipe.WormholeX;
        oldSpice.y = ctrecipe.WormholeY;
    }
    else {
        xrand = Math.ceil( Math.random() * ( gameMap.size - 2 ) ); //change position of oldSpice to xrand, yrand (avoid borders at x=0|127 and y =0|127)
        yrand = Math.ceil( Math.random() * ( gameMap.size - 2 ) );
        oldSpice.x = xrand;
        oldSpice.y = yrand;
    }
}

/*----------------------------------------------------*/

function Asteroid () { }

Asteroid.prototype = new MapObject( 'Asteroid', 0 );

Asteroid.prototype.DamageShip = function () {
    alert( "You skimmed an asteroid and took damage!" );
    oldSpice.isDamaged = true;
}

Asteroid.prototype.DestroyShip = function () {
    oldSpice.energy = 0;
    ctrecipe.GameOver("You slammed into an asteroid!"); 
}

Asteroid.prototype.Collide = function () {
    MapObject.prototype.Collide.call( this );
    let eventDecider = Math.random();
    if ( eventDecider < 0.9 ) {
        this.DamageShip();
    }
    else {
        this.DestroyShip();
    }
}

/*----------------------------------------------------*/

function MeteorShower () { }

MeteorShower.prototype = new MapObject( "MeteorShower", 0 );

/*----------------------------------------------------*/

function AbFreighter () { }

AbFreighter.prototype = new MapObject( "AbFreighter", 0 );

/*----------------------------------------------------*/

function Planet ( name, x, y ) {
    this.name = name;
    this.x = x;
    this.y = y;
}

Planet.prototype = new MapObject( 'Planet', 1 );

Planet.prototype.Collide = function () {

}

Planet.prototype.EnterOrbit = function () {
    alert( "You have entered the orbit of " + this.name );
    //update energy_cost/move here
    if ( oldSpice.x == this.x && oldSpice.y == this.y ) {
        //TODO: oldSpice visits the planet
    }
}

/*----------------------------------------------------*/

function Ryzen () { };

Ryzen.prototype = new Planet( 'Ryzen', -1, -1 );

Ryzen.prototype.Collide = function () {
    alert( "Collided with Ryzen" );
    MapObject.prototype.Collide.call( this );
    this.EnterOrbit();
}

/*----------------------------------------------------*/

function Celeron () { };

Celeron.prototype = new Planet( 'Celeron', -1, -1 );

Celeron.prototype.Collide = function () {
    alert( "Collided with Celeron" );
    MapObject.prototype.Collide.call( this );
    this.EnterOrbit();
}

/*----------------------------------------------------*/

function Xeon () { };

Xeon.prototype = new Planet( 'Xeon', -1, -1 );

Xeon.prototype.Collide = function () {
    alert( "Collided with Xeon" );
    MapObject.prototype.Collide.call( this );
    this.EnterOrbit();
}

/*----------------------------------------------------*/

function Eniac () { };

Eniac.prototype = new Planet( 'Eniac', -1, -1 );

Eniac.prototype.Collide = function () {
    MapObject.prototype.Collide.call( this );
    this.EnterOrbit();
}

/*----------------------------------------------------*/

function BadMax () { }

BadMax.prototype = new MapObject( "BadMax", 0 );

BadMax.prototype.Collide = function () {
    MapObject.prototype.Collide.call( this );
    let eventDecider = Math.random();
    if ( eventDecider < 0.5 ) {
        this.Escape();
    }
    else if ( eventDecider < 0.8 ) {
        this.Steal();
    }
    else {
        this.DestroyShip();
    }
}

BadMax.prototype.Steal = function () {
    alert( "BadMax has stolen your supplies and credits!" );
}

BadMax.prototype.DestroyShip = function () {
    ctrecipe.GameOver("BadMax has destroyed your ship!");
}

BadMax.prototype.Escape = function () {
    alert( "You have run away from BadMax!" );
}

/*----------------------------------------------------*/
//Global game of chance game config variable
var playGameOfChance;

function SpaceStation ( attachedStations ) {
    this.stations = attachedStations; //container for attached-stations 

    //append string representing "sub-stations" attached to SpaceStation
    //use for image representations on game map
    for ( let i = 0; i < this.stations.length; ++i ) {
        this.objType += this.stations[i].type;
    }
}

SpaceStation.prototype = new MapObject( "Station", 0 );

SpaceStation.prototype.Collide = function () {
    let i;
    for ( i = 0; i < this.stations.length; ++i ) {
        if ( this.stations[i].MenuPrompt() ) {
            this.stations[i].Purchase();
        }
    }
    gameOfChance();
}

function CheckBalance ( price ) {
    if ( price > oldSpice.credit ) {
        return false;
    }
    else {
        return true;
    }
}

//For the game of chance at stations
function gameOfChance(){
    //Game of Chance: if the game config variable is set to true
    if(playGameOfChance){
        if(confirm("DEVMODE: You have been asked to play a game of chance. Would you like to play?")){
            PlayGameOfChance();
        }
    }else{
        //Game of Chance: This section creates a randome chance for normal game mode
        var playChance = Math.floor(Math.random() * Math.floor(3));
        if(playChance < 2 ){
            if(confirm("You have been asked to play a game of chance. Would you like to play?")){
                PlayGameOfChance();      
            }
        }

    }
}
//calculates winnings for game of chance
function PlayGameOfChance (){
    var winnings = Math.floor(Math.random() * Math.floor(200));
    oldSpice.credit += winnings;
    alert("You have won " + winnings + " credit(s)!");
    updateLevels();
}


/*----------------------------------------------------*/

function MuskTesla ( energyQuantity, energyPrice ) {
    this.type = 'T';
    this.energyQuantity = energyQuantity;
    this.energyPrice = energyPrice;
}

MuskTesla.prototype.MenuPrompt = function () {
    if ( CheckBalance( this.energyPrice ) ) {
        return confirm( "MuskTesla Attendant:\n\"Do you want to buy " + this.energyQuantity + " energy for " + this.energyPrice + " credits?\"" );
    }
    else {
        alert( "MuskTesla Attendant:\n\"I don't run a charity! Get more credits!" );
        return false;
    }
}

MuskTesla.prototype.Purchase = function () {
    oldSpice.energy += this.energyQuantity;
    oldSpice.credit -= this.energyPrice;
    updateLevels();
    alert( "MuskTesla Attendant:\n\"Thank you for your patronage, happy trails to you!\"" );
}

/*----------------------------------------------------*/

function MiniMart () {
    this.type = 'M';
    this.supplyPrice = 100;
    this.supplyQuantity = 10;
}

MiniMart.prototype.MenuPrompt = function () {
    if ( CheckBalance( this.supplyPrice ) ) {
        if ( oldSpice.supplies < 90 ) {
            return confirm( "MiniMart Attendant:\n\"Do you want to buy " + this.supplyQuantity + " supply for " + this.supplyPrice + " credits?\"" );
        }
        else {
            return confirm( "MiniMart Attendant:\n\"Do you want to top off your supply for " + this.supplyPrice + " credits?\"" );
        }
    }
    else {
        alert( "MiniMart Attendant:\n\"I don't run a charity! Get more credits!" );
        return false;
    }
}

MiniMart.prototype.Purchase = function () {
    if ( oldSpice.supplies < 90 ) {
        oldSpice.supplies += this.supplyQuantity;
    }
    else {
        oldSpice.supplies = 100;
    }
    oldSpice.credit -= this.supplyPrice;
    alert( "MiniMart Attendant:\n\"Thank you for your patronage, happy trails to you!\"" );
}

/*----------------------------------------------------*/

function RepairDepot () {
    this.type = 'R';
    this.repairPrice = 100;
}

RepairDepot.prototype.MenuPrompt = function () {
    if ( CheckBalance( this.repairPrice ) ) {
        if ( oldSpice.isDamaged ) {
            return confirm( "Repair Depot Mechanic:\n\"Do you want to repair your ship damage for " + this.repairPrice + " credits?\"" );
        }
        else {
            alert( "Repair Depot Mechanic:\n\"Your ship is pristine, I refuse your business!\"" );
            return false;
        }
    }
    else {
        alert( "Repair Depot Mechanic:\n\" I don't run a charity! Get more credits!" );
        return false;
    }
}

RepairDepot.prototype.Purchase = function () {
    oldSpice.isDamaged = false;
    oldSpice.credit -= this.repairPrice;
    alert( "Repair Depot Mechanic:\n\"We got the dings out sir, happy trails to you!\"" );
} 