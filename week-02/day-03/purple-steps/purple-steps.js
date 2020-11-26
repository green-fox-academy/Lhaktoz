'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');


for ( let i = 0 ; i < 30 ; i++){
  let size = 10;
  ctx.fillStyle = 'purple';
  ctx.fillRect( size +(i * size), size +(i * size ) , size, size);

}