'use strict';
const {assert:{equal, notEqual, isFunction, deepEqual, isObject}} = require('chai');
//require in methods to use for testing

let parse = require('../lib/parse-args.js');
//require in module wih anonymous function for testing

//tests for parse-args file -- is it a function that returns an object?
describe('parse-args file',()=>{
    describe ('parse', ()=>{
        it('should be a function',()=>{
            isFunction(parse);//use required in function variable
        });
    });
    describe ('anonymous function',()=>{
        it('should return an object', ()=>{
            let result = parse(['1','20'])
            isObject(result, 'Dice Roll Object?')
        });
    });
});




