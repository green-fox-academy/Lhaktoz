'use strict';
const test = require('tape');
const isAnagram = require('./anagramm.js');


test( 'should return error message if either of the list empty', t => {
  const stringA = undefined;
  const stringB = undefined;
  const actual = isAnagram( stringA, stringB );
  const expected = 'one of the input is empty';

  t.equal( actual, expected );
  t.end();
} );

test( 'should return false if two strings are of different length', t => {

  const stringA = 'apple';
  const stringB = 'banana';
  const actual = isAnagram( stringA, stringB );
  const expected = false;

  t.equal( actual, expected );
  t.end();
} );

test( 'should return true if letters are the same but uppercase', t => {
  const stringA = 'apple';
  const stringB = 'APPLE';
  const actual = isAnagram( stringA, stringB );
  const expected = true;

  t.equal( actual, expected );
  t.end();
} );

test( 'should return true if two words are anagrams', t => {
  const stringA = 'apple';
  const stringB = 'ppael';
  const actual = isAnagram(stringA, stringB);
  const expected = true;

  t.equal( actual, expected );
  t.end();
} );