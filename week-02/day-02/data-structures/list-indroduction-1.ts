'use strict';

// Create an empty list which will contain names (strings)
// Print out the number of elements in the list
// Add William to the list
// Print out whether the list is empty or not
// Add John to the list
// Add Amanda to the list
// Print out the number of elements in the list
// Print out the 3rd element
// Iterate through the list and print out each name
// William
// John
// Amanda
// Iterate through the list and print
// 1. William
// 2. John
// 3. Amanda
// Remove the 2nd element
// Iterate through the list in a reversed order and print out each name
// Amanda
// William
// Remove all elements

let names: string[] =[];
console.log(names.length);
names.push('William', 'John', 'Amanda');

console.log(names);
console.log(names.length);
console.log(names[2]);
names.forEach(function(value){
  console.log(value);
});

names.forEach(function(value){
  console.log(value);
});

for(let i:number = 0 ; i < names.length; i++){
  console.log( `${i+1}. ${names[i]}`);
};

delete names[1];
console.log(names);

names.reverse();

names.forEach(function(value){
  console.log(value);
});

for(let i:number = 0 ; i <= names.length+1; i++){
  names.shift()
};

console.log(names)
