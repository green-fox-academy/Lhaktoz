'use strict';

import { Plant } from './Plant';

export class Tree extends Plant {

  constructor(color: string, isWatered: boolean, waterAmount: number){
    super(color, isWatered, waterAmount);
  }
  
  watering(amount: number){
    if (this._waterAmount < 10){
    this._waterAmount += amount * 0,4;
  
    }
    this._isWatered = true;
    console.log(`The ${this._color} Tree doesn't need water`)
  }

}