'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

console.log( (24*60*60) - ((currentHours * 60 * 60) + (currentMinutes * 60) + currentSeconds));