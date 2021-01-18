'use strict';
import { Student } from './Student';
import { Mentor } from './Mentor';

export class Cohort{
  protected _name: string;
  protected _students: Student[];
  protected _mentors: Mentor[];

  constructor(name: string){
    this._name = name;
    this._students = [];
    this._mentors = [];
  }

  addStudent(Student: Student){
    this._students.push(Student);
  }

  addMentor(Mentor: Mentor){
    this._mentors.push(Mentor);
  }

  info(){

    console.log(`The ${this._name} cohort has ${this._students.length}  students and ${this._mentors.length} mentors.`);
  }

}