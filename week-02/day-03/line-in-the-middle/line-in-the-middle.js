  
'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');





// draw a red horizontal line to the canvas' middle.

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(600,200);
ctx.stroke();

// draw a green vertical line to the canvas' middle.
ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(300, 0);
ctx.lineTo(300,400c);
ctx.stroke();