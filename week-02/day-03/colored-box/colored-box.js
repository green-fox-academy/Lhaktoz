'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// draw a box that has different colored lines on each edge.


// ctx.strokeStyle = 'red'
// ctx.beginPath();
// ctx.moveTo(200,100);
// ctx.lineTo(400,100);
// ctx.stroke();

// ctx.strokeStyle = 'green'
// ctx.beginPath();
// ctx.moveTo(200,100);
// ctx.lineTo(200,200);
// ctx.stroke();

// ctx.strokeStyle = 'blue'
// ctx.beginPath();
// ctx.moveTo(200,200);
// ctx.lineTo(400,200);
// ctx.stroke();

// ctx.strokeStyle = 'yellow'
// ctx.beginPath();
// ctx.moveTo(400,200);
// ctx.lineTo(400,100);
// ctx.stroke();



// ctx.strokeStyle = 'red'
// ctx.beginPath();
// ctx.moveTo(200,100);
// ctx.lineTo(400,100);
// ctx.stroke();
// ctx.strokeStyle = 'green'
// ctx.lineTo(400,200);
// ctx.stroke();
// ctx.strokeStyle = 'blue'
// ctx.lineTo(200,200);
// ctx.stroke();
// ctx.strokeStyle = 'yellow'
// ctx.lineTo(200,100);
// ctx.stroke();

function drawlinewithcolor(x,y,xx,yy, color){
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(xx,yy);
  ctx.stroke();
}
drawlinewithcolor(200,100,400,100,'red');
drawlinewithcolor(400,100,400,200,'green');
drawlinewithcolor(400,200,200,200,'blue');
drawlinewithcolor(200,200,200,100,'yellow');