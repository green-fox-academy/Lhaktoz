'use strict';

//Write a recursive function that takes one parameter: n and adds numbers from 1 to n.
function addnumbers (n: number){
  console.log(n)
  if ( n <= 1 ){
  return 1;
} else {
  return n + addnumbers(n-1);
}
}

console.log(addnumbers(10))