import {Component, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name: string = '';
  stream: string = '';

  @Output() studentAdded: EventEmitter<any> = new EventEmitter<any>();

  addStudent() {
    this.studentAdded.emit({
      name: this.name,
      stream: this.stream
    })
    this.name = '';
    this.stream = '';

  }
}
