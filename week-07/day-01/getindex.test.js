'use strict'

//ES6
//import g

const test = require('tape');
const getIndex = require('./getindex');

test('Should return -1, if the list emtpy', t => {
  // const actual=
  // const expected = 
  
  t.equal(getIndex([], 5), -1);
  t.end();
});
