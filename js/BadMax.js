function BadMax()
{
    var maxObj = CelestialObject();

    var super_Collide = maxObj.Collide();

    maxObj.Collide = function() 
    {
        super_Collide();
    };

    return maxObj;
}