'use strict';

import { Vehicle } from './Vehicle';
import { flyable } from './Flyable';

export class Helicopter extends Vehicle implements flyable {
  public fly(): void {
    console.log('repülök');
  }
  
  public flyable(): boolean{
    return true;
  }

  public takeOff(): void{
    console.log('Leszállás')
  }

}

