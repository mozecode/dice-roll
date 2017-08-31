'use strict';

process.title = 'Dice Roll'

const { argv: [,, ...args] } = process//get strings from user on command line in args variable,
//then go to parse-args.js
const { count, sides } = require('./parse-args')(args)//pass in args values to trigger the function
//and assign value to count, sides using object destructuring, then go to dice.js
const { roll, toDiceNotation } = require('./dice')

const dice = toDiceNotation({count, sides})
const total = roll(dice)
console.log(total)