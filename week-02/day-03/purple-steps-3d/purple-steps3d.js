'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

let sumsize = 10;
for ( let i = 0 ; i < 6 ; i++){
  let size = 10 * (i+1);
   ctx.fillStyle = 'purple';
   ctx.fillRect( sumsize, sumsize , size , size);
   sumsize =  sumsize + size; 
}

