'use strict'

import { Plant } from './Plant';

export class Flower extends Plant {

  constructor(color: string, isWatered: boolean, waterAmount: number){
    super(color, isWatered, waterAmount); 
  }

  watering(amount: number){
    if (this._waterAmount < 5){
    this._waterAmount += amount * 0,75;
    }
    this._isWatered = true;
    console.log(`The ${this._color} Flower doesn't need water`)
  }


}