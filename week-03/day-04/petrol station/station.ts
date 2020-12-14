'use strict';

import { Car } from './car';

export class Station {
  protected _gasAmount: number;

  constructor(gasAmount: number) {
    this._gasAmount = gasAmount;
  }

  public refill(car: Car){
    this._gasAmount -= car.capacity;
    car.gasAmount += car.capacity
  }
}
