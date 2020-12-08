'use strict';

import { StringedInstrument } from './StringedInstrument';

export class ElectricGuitar extends StringedInstrument{
  
  

  constructor (numberOfStringes: number = 6, ){
    super(numberOfStringes)
    this._name = 'Electric Guitar';
    
  }

  public sound(): string {
    return 'Twang';
  }

}