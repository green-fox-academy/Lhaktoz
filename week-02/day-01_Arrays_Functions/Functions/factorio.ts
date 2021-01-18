  
'use strict';

// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(number : number) : number {
  let factorial: number = number;
  for(let i: number= number-1; i > 0; i--){
    factorial = factorial * i
  }
  return factorial
}

console.log(factorio(8));