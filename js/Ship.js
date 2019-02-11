


class Ship {
    constructor( xi, yi, energy, supplies, credit, engine, isDamaged ) {
        this.x = xi;
        this.y = yi;
        this.energy = energy;
        this.supplies = supplies;
        this.credit = credit;
        this.engine = engine;
        this.isDamaged = isDamaged;
        this.sensor = new Sensor( this.x, this.y );
    }







}