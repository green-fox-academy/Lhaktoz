'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Fill the canvas with a checkerboard pattern.

ctx.strokeRect(100,0,400,400);


let isWhite= true;
let yplace = 0;

for ( let i = 0; i < 8; i++ ){
  let xplace = 100;

  for (let j= 0; j < 8; j++){
    if (isWhite){
      ctx.fillStyle = 'white';
  } else {
    ctx.fillStyle = 'black';
  }

    ctx.fillRect(xplace, yplace, 50, 50);
    xplace = xplace + 50;
    isWhite = !isWhite; 
  }
yplace = yplace + 50;
isWhite = !isWhite;
};
  


