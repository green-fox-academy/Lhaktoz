'use strict'

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideByZero (number) {
  console.log(10 / number);
  if (number ===0) {
   throw new Error('failed, you gave 0');
  }
  }


try {
  divideByZero(0)
  }
 catch (e){
  console.log(e);
}

