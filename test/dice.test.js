
'use strict';
const {assert:{equal, notEqual, isFunction, deepEqual, isObject}} = require('chai');
//require in methods to use for testing
const{randomInt} = require('../lib/math');
const {toDiceNotation, roll} = require('../lib/dice');

describe('dice file', ()=>{
    describe('toDiceNotation',()=>{
        it('isNot a Number?',()=>{
            isNaN(toDiceNotation({count:1, sides:20}), "Returned a string!");
        });
    });

    describe('roll', ()=>{
        it('should be a number',()=>{
            isFinite(roll('2d40'), "result?");
        });
    });
});
