'use strict';

const fs = require ('fs');

try {
  let fileContent = fs.readFileSync('reversed-lines.txt', 'utf-8');
  let fileArray = fileContent.split('');
  console.log(fileArray.reverse().join(''))
} catch (e) {
  console.log(e);
}