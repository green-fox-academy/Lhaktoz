'use strict';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

function countLine (fileName: string){
  let fileArray = []
  const fs = require('fs');
  try {
  let fileContent = fs.readFileSync(fileName, 'utf-8');
  let fileArray = fileContent.split('\r\n');
  console.log(fileArray.length)
  }
  catch {
    console.log ('0')
  }
}

countLine('myfile.txt')



