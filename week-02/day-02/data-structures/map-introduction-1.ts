'use strict';


//Create an empty map where the keys are integers and the values are characters
let map = { };

//Print out whether the map is empty or not
if (Object.keys(map).length === 0){
  console.log('The map is empty');
} else {
  console.log('The map is not empty');
}


//Add the following key-value pairs to the map
map[97] = 'a';
map[98] = 'b';
map[99] = 'c';
map[65] = 'A';
map[66] = 'B';
map[67] = 'C';

// console.log(map);

//Print all the keys

console.log(Object.keys(map));

//Print all the values

console.log(Object.values(map));
// for (let keys in map) {
//   console.log(map[keys]);
// }

//Add value D with the key 68
map[68] = 'D';

//Print how many key-value pairs are in the map??
let count = Object.entries(map);
console.log(count.length);

//Print the value that is associated with key 99
console.log(map[99]);

//Remove the key-value pair where with key 97

delete map[97];
console.log(map);

//Print whether there is an associated value with key 100 or not
let is100 = map.hasOwnProperty(100);

if (is100){
  console.log('There is an associated value with key 100')
} else {
  console.log('There is not an associated value with key 100')
 
}