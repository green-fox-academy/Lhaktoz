'use strict';

export abstract class Animal {
  protected _name: string;
  protected _age: number;
  protected _gender: string;

  constructor(name: string){
    this._name = name;
  }

  protected abstract getName(): void;
  protected abstract breed(): void;
  protected abstract eat(): void;

}