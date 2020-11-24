'use strict';


//Create an empty map where the keys are integers and the values are characters
let map = {};

//Print out whether the map is empty or not
// if (map.length === 0){
//   console.log('empty');
// } else {
//   console.log('not empty');
// }


//Add the following key-value pairs to the map
map[97] = 'a';
map[98] = 'b';
map[99] = 'c';
map[65] = 'A';
map[66] = 'B';
map[67] = 'C';

console.log(map);

//Print all the keys
console.log(Object.keys(map));

//Print all the values
// console.log(Object.values(map));??

//Add value D with the key 68
map[68] = 'D';

//Print how many key-value pairs are in the map??

//Print the value that is associated with key 99
console.log(map[99]);

//Remove the key-value pair where with key 97

delete map[97];
console.log(map);

//Print whether there is an associated value with key 100 or not
console.log(map.hasOwnProperty(100));