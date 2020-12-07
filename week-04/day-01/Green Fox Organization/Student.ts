'use strict';

import { Person } from './Person'; 

export class Student extends Person {
  protected _previousOrganization: string;
  protected _skippedDays: number;

  constructor(name?: string, age?: number, gender?: string, prevousOrganization?: string){
    super(name, age, gender)
    this._skippedDays = 0;
    this._previousOrganization = prevousOrganization ?? "The School of Life";
  }

  introduce(){
    console.log(`Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} from ${this._previousOrganization} who skipped ${this._skippedDays} from the course.`);
  }

  getGoal(){
    console.log(`My goal is: Be a junior software developer`);
  }

  skipDays(numberOfDays: number){
    this._skippedDays = 0;
    this._skippedDays += numberOfDays;
  }
}