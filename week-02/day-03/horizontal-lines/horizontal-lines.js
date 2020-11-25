'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');


// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

function horizontalLine (x,y) {
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x + 50,y);
  ctx.stroke();
}


for (let i = 0; i <= 3 ; i++){
  
 horizontalLine(200 -( 20 * i),150-( 10 * i));
}
