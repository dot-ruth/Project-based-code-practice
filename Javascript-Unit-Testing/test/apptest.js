const assert = require('chai').assert;
const { add } = require('../app');
// here the app module exports a single function
// so no need to specify the function to be tested
const app = require('../app');

// an app module that exports multiple function
//this type of declaration will be complex for a project that involves many functions
// so to fix this problem we can declare them like
// const app = require('../app'); then 
// app.sayhello() in the assert function

const sayhello = require('../app').SayHello;
const saygoodbye = require('../app').SayGoodbye;
const Add = require('../app').add;
//describe() allows you to gather your tests into separate groupings 
//within the same file, even multiple nested levels
describe('App',function(){
    describe('sayhello()',function(){
//to check the similarity/equality between the returned object and value
    it('sayhello should return hello',function(){
        assert.equal(sayhello(),'hello');
    });
    
    // to check the type of the returned object
    it('sayhello should return a string',function(){
        assert.typeOf(sayhello(),'string');
    });

    });

    describe('saygoodbye()',function(){
        it('saygoodbye should return goodbye',function(){
            assert.equal(saygoodbye(),'Goodbye');
        })
    });

    describe('Add()',function(){
// to check if something is above
    it('The sum should be above 5',function(){
        assert.isAbove(Add(5,5),5);
    })
    })
  
});