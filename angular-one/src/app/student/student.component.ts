import {Component, OnInit} from '@angular/core';
import {Student} from "../../student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  name: string = ''

  STUDENT: Student[] = [
    {
      studentId: 1,
      studentName: 'Tamojit'
    }
  ];

  newStudent: Student = new Student();
  // private studentName: '';

  constructor() {

  }

  ngOnInit(): void {
  }

  save() {
    // this.STUDENT.push(this.studentName);
    // //this.newStudent = new Student();
    // alert(this.name);
  }

}
