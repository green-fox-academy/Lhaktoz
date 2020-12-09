'use strict'

export class Sum {
  public _list: number[];
  constructor (list?: number []){
      this._list = list ?? [];
  }

  sum() : number {
    let sum: number = 0;
    for (let i = 0; i < this._list.length; i++){
       sum  += this._list[i];
    }
    return sum
  }
}

