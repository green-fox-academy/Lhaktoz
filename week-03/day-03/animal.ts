'use strict';

// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

export class Animal {
 protected  _hunger: number;
 protected _thirst: number;

  constructor (hunger: number = 50, thirst: number = 50) {
    this._hunger = hunger;
    this._thirst = thirst;
  }
  
  public get hunger(): number {
    return this._hunger; 
  }

  public eat() {
    return this._hunger--;
  }

  public drink() {
    return this._thirst--;
  }

  public play() {
    this._hunger++;
    this._thirst++;
  }
}

// let cat = new Animal();
// console.log(cat);
// cat.play();
// console.log(cat._thirst);