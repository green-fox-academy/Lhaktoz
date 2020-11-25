'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Draw four different size and color rectangles.
// Avoid code duplication.

let colors = ['red','green','blue', 'brown']
for (let i =0; i < colors.length ; i++){
  ctx.fillStyle = colors[i];
  ctx.fillRect(10+(i*50), 10+(i*40), 10 + (i * 20), 10 +(i * 25));
}


