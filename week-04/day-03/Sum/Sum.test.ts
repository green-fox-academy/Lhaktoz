'use strict';

import * as test from 'tape';
import { Sum } from './Sum';





test('sum the elements of the arrey if empty', t => {
  let myList = new Sum();
  
  const actual = myList.sum();
  const expected = 0;

  t.equal(actual, expected);
  t.end();
});

test('sum the elements of the arrey if it has 1 element', t => {
  let myList = new Sum();
  myList._list.push(1)
  
  const actual = myList.sum();
  const expected = 1;

  t.equal(actual, expected);
  t.end();
});



test('sum the elements of the arrey if it has multiple element', t => {
  let myList = new Sum();
  myList._list.push(2, 2, 3)
  
  const actual1 = myList.sum();
  const expected1 = 7;

  t.equal(actual1, expected1);
  t.end();
  console.log(myList)
});

