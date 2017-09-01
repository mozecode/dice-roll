'use strict';
const {assert:{equal, notEqual, isFunction, deepEqual, isObject}} = require('chai');
//require in methods to use for testing
const{randomInt} = require('../lib/math');

describe('math file', ()=>{
    describe('randomInt',()=>{
        it('should produce a number',()=>{
            isFinite(randomInt(1,40));
        });
    });
});