'use strict';

// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating an instance, we need to specify the color and the width
// Every sharpie object is created with a default 100 as inkAmount
// We can use() the sharpie objects which decreases inkAmount

export class Sharpie {
protected _color: string;
protected _width: number;
protected _inkAmount: number;

constructor (color: string, width: number){
  this._color = color;
  this._width = width;
  this._inkAmount = 100;
}

use (){
  this._inkAmount -= 20;
}

public get inkAmount(): number {
  return this._inkAmount;
}

}

let sharpie1 = new Sharpie('purple', 60);
console.log(sharpie1);
sharpie1.use();
console.log(sharpie1);
