
'use strict';
//The math file should export an Object with a method called randomInt that accepts two arguments,
// a lower bound and an upper bound.
//This function should return a random integer inclusive of the lower bound and the upper bound.

let randomInt=(min, max)=> {
             min = Math.ceil(min);
             max = Math.floor(max);
             return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
            }


module.exports ={randomInt};