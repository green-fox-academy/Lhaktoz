const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

function drawLineToCenter(x,y,){

  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(300,200);
  ctx.stroke();
}

drawLineToCenter(300,350)
for  (let i = 0; i < 3-1; i++){
  drawLineToCenter(10+(i*100), 400-(i*50));
}