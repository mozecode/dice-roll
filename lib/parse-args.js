"use strict";
//This parse-args file should export a single function to parse your
//command line arguments.
//The function should accept an array containing the arguments passed
// on the command line.
// Convert these arguments to an object with a count and sides property.



//export function with returned object we can pluck count and side values from in cli.js
module.exports=(args)=>{
    console.log (args)
    let numArray= args.map((num)=>parseFloat(num));//turn args into numbers from strings
    let diceRollObj={};
    if(numArray.length === 2){//if user enters 2 values, use first number for count, and second number for sides
        diceRollObj ={
            count:numArray[0],//assign value to properties count, sides on dice roll object
            sides:numArray[1]
        }
        return diceRollObj;//return the whole object
    }else if (numArray.length === 1){//else if only one value, use the value entered for sides
        diceRollObj ={
            count:1,
            sides:numArray[0]
        }
        return diceRollObj;//return the whole object
    }
}


