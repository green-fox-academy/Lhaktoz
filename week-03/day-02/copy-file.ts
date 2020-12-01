'use strict'

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

  const fs = require('fs');
 
  function copyFile (fileFrom,fileTo){
  let fileContent = fs.readFileSync(fileFrom, 'utf-8');
  fs.writeFileSync(fileTo,fileContent);
  }

  
try {

   copyFile('myfile.txt', 'copyfile.txt');
  
  }
  catch(e){
  }  