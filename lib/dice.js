'use strict';
//The dice file should export an object with at least two methods called
//roll and toDiceNotation. The toDiceNotation method should accept an object
// with a sides and count property and convert it to a String with the
// dice notation i.e. "1d6" or "2d40". The roll method should accept a dice notation
// String and produce a random Number which is the result of the dice roll.

//require in math module
const{randomInt} = require('./math');

//methods:
    let toDiceNotation =(obj)=>{
        let stringifyObj = `${obj.count}d${obj.sides}`
        let diceStr= stringifyObj.toString();
        return diceStr;
       //take count and sides off of the object and insert a d between them
       //then return the result that becomes dice in cli.js
    }

    let roll =(diceString)=>{
        //take dice string passed in and break off the numbers to assign to max
        let newStringArray =diceString.replace("d", ",").split(",");
        let numbersArr = newStringArray.map((num)=>parseInt(num));
        let min = 1;//should this be numbersArr[0]? look at problem
        let max =numbersArr[1];//range is 1 to whatever number the user enters
        return randomInt(min, max);
    }
module.exports={toDiceNotation, roll};