'use strict';


import { StringedInstrument } from './StringedInstrument';

export class Violin extends StringedInstrument{
  
  

  constructor (numberOfStringes: number = 4, ){
    super(numberOfStringes);
    this._name = 'Violin';
    
  }

  public sound(): string {
    return 'Screech';
  }

}