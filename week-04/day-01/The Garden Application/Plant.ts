'use strict'

export class Plant {
  protected _color: string;
  protected _waterAmount: number;
  protected _isWatered: boolean;

  constructor(color: string, isWatered: boolean = false, waterAmount: number = 0){
    this._color = color;
    this._waterAmount = waterAmount;
    this._isWatered = isWatered;
  }
}

let plant1 = new Plant('purple');