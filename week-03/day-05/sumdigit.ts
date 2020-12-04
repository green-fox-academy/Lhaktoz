'use strict';

//Given a non-negative integer n, return the sum of its digits recursively (without loops).


function sumdigit (n: number){
  console.log(n)
  if ( n < 9 ){
  return 1;
} else {
  return n + addnumbers(n-1);
}
}

console.log(addnumbers(10))