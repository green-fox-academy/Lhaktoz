  
'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

let splitToBeReversed: string[] = toBeReversed.split("");
// console.log(splitToBeReversed);

let reverseArrey: string[] = splitToBeReversed.reverse();
// console.log(reverseArrey);

let reversed: string = reverseArrey.join("");
console.log(reversed);