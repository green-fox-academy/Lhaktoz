'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

function drawSquare (x,color){
  ctx.fillStyle = color;
  ctx.fillRect(300 - (x/2), 200 - (x/2) , x, x);
}

drawSquare(50,'green')

let rainbowColors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple' ];

for ( let i = 0 ; i < rainbowColors.length ; i++){
  ctx.fillStyle = rainbowColors[i];
  drawSquare(400-(i*(400/rainbowColors.length)))

}

