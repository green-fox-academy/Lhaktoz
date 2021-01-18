'use strict';

import { Instrument } from './Instrument';

export abstract class StringedInstrument extends Instrument{
  protected _numberOfStrings: number;

  constructor(numberOfStrings: number){
    super();
    this._numberOfStrings = numberOfStrings;
  }

  protected abstract sound(): void;

  public play(){
    console.log(`${this._name}, a ${this._numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }
 

}