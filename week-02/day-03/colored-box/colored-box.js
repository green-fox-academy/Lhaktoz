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





function drawLineWithColor(x,y,xx,yy, color){
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(xx,yy);
  ctx.stroke();
 };
// drawLineWithColor(200,100,400,100,'red');
// drawLineWithColor(400,100,400,200,'green');
// drawLineWithColor(400,200,200,200,'blue');
// drawLineWithColor(200,200,200,100,'yellow');






function drawColoredBox(beginX,beginY, width, height, color1, color2, color3, color4) {
  drawLineWithColor(beginX, beginY, beginX + width, beginY, color1);
  drawLineWithColor(beginX + width, beginY, beginX + width, beginY + height, color2);
  drawLineWithColor(beginX, beginY + height , beginX + width, beginY + height , color3);
  drawLineWithColor(beginX, beginY + height, beginX , beginY, color4);
};

drawColoredBox(250, 200, 60, 20, 'yellow', 'darkgreen', 'orange', 'darkgrey');



