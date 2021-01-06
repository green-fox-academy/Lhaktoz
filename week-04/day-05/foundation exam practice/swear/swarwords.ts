'use strict'

const fs = require('fs');

let swearArray: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt']


function removeSwearWords(file: string, arrey :string[]) {
  let fileContent: string = '';
  try {
    fileContent = fs.readFileSync(file, 'utf-8');
  } catch(error) {
    console.log(error);
  }

  
  let SplitContent = fileContent.replace(/\./g,'\r\n').replace(/\,/g,'\r\n').split('\r\n')
  let SplitContent2 = SplitContent.map(string => {
    return string.split(' ');
  })

  console.log(SplitContent)
  // for(let i = 0; i < SplitContent2.length; i++) {
  //   let removedwords= 0;
  //   for(let j = 0; j < SplitContent2[i].length; j++) {
  //     for(let k = 0; k < swearArray.length; k++) {

  //     }

  //   }
  // } 
}

removeSwearWords('content.txt', swearArray)