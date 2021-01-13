
'use strict';

function printFruit(fruit) {
  console.log(fruit);
};

setTimeout (() => printFruit('apple'), 0);
setTimeout (() => printFruit('pear'), 1000);
setTimeout (() => printFruit('melon'), 3000);
setTimeout (() => printFruit('grapes'), 5000);
// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds