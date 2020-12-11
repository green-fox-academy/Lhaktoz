'use strict'

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

  
 
  function copyFile (fileFrom,fileTo): void {
    const fs = require('fs');
    try {
    let fileContent = fs.readFileSync(fileFrom, 'utf-8');
    fs.writeFileSync(fileTo,fileContent);
    }  catch(e) {

    }
  }