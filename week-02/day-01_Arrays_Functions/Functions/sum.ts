'use strict';
// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

function calculateSum (until: number): number {
  let sumOfNumbers: number = 0;
  for(let i: number = 0; i <= until; i++){
    sumOfNumbers +=i;
  }
  return sumOfNumbers;
}

console.log(calculateSum(6));