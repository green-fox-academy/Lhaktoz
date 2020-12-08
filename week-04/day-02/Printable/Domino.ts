'use strict';
import { printable } from './printable'

export class Domino implements printable{
  protected _aSide: number;
  protected _bSide: number;

  constructor(aSide:number, bSide: number){
    this._aSide = aSide;
    this._bSide = bSide;
  }

  public printAllFields(): void {
    console.log(`Domino A side: ${this._aSide} , B side: ${this._bSide}`);
  }
}

let dominoes = initializeDomino();

function initializeDomino(): Domino[] {
  return [
 new Domino(3,5),
 new Domino(2,2),
 new Domino(1,6),
  ]
}




for (let domino of dominoes) {
  domino.printAllFields();
}
