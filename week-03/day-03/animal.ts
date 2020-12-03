'use strict';

// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class Animal {
  _hunger: number;
  _thirst: number;

  constructor (hunger:number = 50, thirst:number = 50){
    
   this._hunger = hunger;
   this._thirst = thirst;
  }
  
  eat() {
    this._hunger--;
  }

  drink(){
    this._thirst--;
  }

  play(){
    this._hunger++;
    this._thirst++;
  }
}

let animal1 = new Animal();
console.log(animal1);
animal1.play();
console.log(animal1._thirst);