'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

function diagonal(x,y){
if (x < 300 && y < 200){
  ctx.strokeStyle = 'green'
} else {
  ctx.strokeStyle = 'red'
}
ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(x+100,y+100);
ctx.stroke();
};

diagonal(150,200);
diagonal(10,20);