'use strict';
import { Sharpie } from '../../day-03/sharpie';

class SharpieSet {
  protected _sharpies: Sharpie [] = [];

  constructor(items: Sharpie[]) {
    this._sharpies = items;
  }

  public get sharpies(): Sharpie[] {
    return this._sharpies;
  } 

  public add(sharpie: Sharpie): void {
    this._sharpies.push(sharpie);
  }

  public countUsable(): number {
    let count: number = 0;
    this._sharpies.map(function(val: Sharpie): void{
        if (val.inkAmount > 0){
          count ++
        }
    });
  return count;
  }

  public removeTrash(){
    this._sharpies.map(function(sharpie: Sharpie, index: number, sharpies: Sharpie[]): void {
      if(sharpie.inkAmount === 0){
        sharpies.splice(index, 1 );
      }
    });
  }
}


// add methodussal constructor nélkül
// let mySet = new SharpieSet();
// let sharpie1 = new Sharpie('red', 3);
// let sharpie2 = new Sharpie('blue', 4);
// let sharpie3 = new Sharpie('green', 5);

// mySet.add(sharpie1);
// mySet.add(sharpie2);
// mySet.add(sharpie3);

// sharpie1.use()
// sharpie1.use()
// sharpie1.use()
// sharpie1.use()
// sharpie1.use()

// console.log(mySet);

// console.log(mySet.countUsable());
// mySet.removeTrash();
// console.log(mySet)

// ----------------------
// add methodus nélkül constructorral ([])
// let sharpie1 = new Sharpie('red', 3);
// let sharpie2 = new Sharpie('blue', 4);
// let sharpie3 = new Sharpie('green', 5);

// let sharpieArray: Sharpie[] = [sharpie1,sharpie2,sharpie3];
// let mySet = new SharpieSet(sharpieArray);

// vagy  62-68 helyett:
// let sharpieArray: Sharpie[] = [
//   new Sharpie('red', 3),
//   new Sharpie('blue', 4),
//   new Sharpie('green', 5),
// ]

// sharpie1.use()
// sharpie1.use()
// sharpie1.use()
// sharpie1.use()
// sharpie1.use()

// console.log(mySet.countUsable());
// mySet.removeTrash();
// console.log(mySet)