'use strict';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');
let fileArray = []
let fileContent = fs.readFileSync('myfile.txt', 'utf-8');
function countLine (filename){
  let fileArray = (fileContent.split('\r\n'))

console.log(fileArray.length)

}


try {

countLine(fileContent)
}
catch(e){
  return console.log(0)
}


