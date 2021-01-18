'use strict';

 const fs = require('fs');

 try {
  let fileContent = fs.readFileSync('Doubled.txt', 'utf-8'); 
  let fileArray = fileContent.split('');
  var newarr = [fileArray[0]];
  for (var i = 1; i < fileArray.length; i++) {
     if (fileArray[i]!=fileArray[i-1]) newarr.push(fileArray[i]);
  }
  let newFileContent = newarr.join('')
  console.log(newFileContent);
  } catch (e) {
    console.log(e);
  }
