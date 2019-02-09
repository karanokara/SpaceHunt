class Ship{
    constructor(xi, yi, energy = 1000, supplies = 100, credit = 1000, engine = "basic", isDamaged = false){
        this.x = xi;
        this.y = yi;
        this.energy = energy;
        this.supplies = supplies;
        this.credit = credit;
        this.engine = engine;
        this.isDamaged = isDamaged;
    }
}