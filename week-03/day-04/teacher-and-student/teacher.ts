'use strict';

import { Student } from "./student";

export class Teacher {


  public teach (student: Student){
    return student.learn();
  }
public answer(){
  console.log(`teacher is answering a question`);
  }
}