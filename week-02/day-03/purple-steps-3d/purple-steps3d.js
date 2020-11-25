'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

for ( let i = 1 ; i < 6 ; i++){
  ctx.fillStyle = 'purple';
  let size = 10;
  ctx.fillRect(0 + (i * size), i +(i * size) , size, size);

}

