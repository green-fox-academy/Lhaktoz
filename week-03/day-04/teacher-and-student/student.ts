'use strict';

import { Teacher } from './teacher';

export class Student{
  
  public learn (){
    console.log(`student learning something new`) 
  }

  public question(teacher: Teacher) {
   return teacher.answer();
  }
}