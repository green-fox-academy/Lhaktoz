'use strict';


import { StringedInstrument } from './StringedInstrument';

export class BassGuitar extends StringedInstrument{
  
  

  constructor (numberOfStringes: number = 4, ){
    super(numberOfStringes);
    this._name = 'Bass Guitar';
    
  }

  public sound(): string {
    return 'Duum-duum-duum';
  }

}