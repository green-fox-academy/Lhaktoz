'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquares (x,y){
  ctx.fillRect(x, y, 50, 50)
}

drawSquares(10,50);
drawSquares(200,100);
drawSquares(400,50);