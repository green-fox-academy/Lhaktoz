'use strict'

import { Station } from './station';

export class Car {
  protected _gasAmount: number;
  protected _capacity: number;

  constructor(){
    this._gasAmount = 0;
    this._capacity = 100;
  }

  public get gasAmount(): number {
    return this._gasAmount;
  }

  public set gasAmount(gasAmount: number) {
    this._gasAmount = gasAmount;
  }
  public get capacity(): number {
    return this._capacity;
  }

  public set capacity(capacity: number) {
    this._capacity = capacity; 
  }

}

let station = new Station(500);
let car = new Car();

station.refill(car);
console.log(station)
console.log(car)