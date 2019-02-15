/*
* GameMode responsible for:
** Initialization
** Win Condition and Flagging
** Lose Condition and Flagging
*/

function GameMode(params) 
{
    //Game mode object that gets returned
    gameObj = {};

    //Container for all methods that need to be updated 
    //Responsibility of Objects to append to array 
    //their functions that need to be called
    gameObj.tickObjects = [];

    //Validation mode flag
    gameObj.isValidationMode = false;

    gameObj.GameOver = function()
    {
        alert("You lost the game!");
    }

    gameObj.GameWinner = function()
    {
        alert("You won the game!");
    }

    gameObj.tick = function()
    {
        console.log("Calling tick objects")
        //Iterate through all tick objects and call methods
        let i;
        for(i = 0; i < gameObj.tickObjects.length; ++i)
        {
            gameObj.tickObjects[i];
        }
    }

    return gameObj;
}