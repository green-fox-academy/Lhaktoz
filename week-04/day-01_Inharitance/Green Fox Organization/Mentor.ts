'use strict';

import { Person } from './Person';

export class Mentor extends Person{
  protected _level: string;

  constructor(name?: string, age?: number, gender?: string, level?: string){
    super(name, age, gender);
    this._level = level ?? 'intermediate';
  }

  getGoal(){
    console.log('My goal is: Educate brilliant junior software developers');
  }
  introduce(){
    console.log(`Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} ${this._level} mentor. `);
  }

}