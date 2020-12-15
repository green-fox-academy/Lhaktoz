'use strict';

import { Animal } from '../../day-03/animal';

class Farm {
  protected _animals: Animal[];
  protected _slots: number;

  constructor(slots: number) {
    this._slots = slots;
    this._animals = [];
  }

  public add(animal: Animal): void {
    this._animals.push(animal);
    this._slots --;
  }

  public breed(): void {
    if(this._slots > 0) {
      let cow = new Animal();
      this._animals.push(cow);
      this._slots --;
    }
  }

  public slaughter() : void {
    let leastHunger: number = 50;
    let indexleastHunger: number;
    for (let i = 0; i < this._animals.length; i++) {
      if ( leastHunger > this._animals[i].hunger) {
        let leastHunger = this._animals[i].hunger;
        let indexleastHunger = i; 
      }
    }
    this._animals.splice(indexleastHunger, 1)
    this._slots ++;   
  }
}

let myFarm = new Farm(3);
let bigCow = new Animal();
let otherBigCow = new Animal();
bigCow.eat()

myFarm.add(bigCow);
myFarm.add(otherBigCow);

myFarm.breed();

console.log(myFarm);
myFarm.slaughter();
console.log(myFarm);
