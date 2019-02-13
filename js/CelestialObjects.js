function CelestialObject()
{
    //return obj
    var celObj = {};

    //public fields/functions
    celObj.Collide() = function() 
    {
        alert("Calling super collide");
    };


    return celObj;
}

function Asteroid()
{
    var astObj = CelestialObject();

    var super_celCollide = astObj.Collide();

    astObj.Collide() = function() {
        super_celCollide;
    };

    return astObj;
}