import {Component} from '@angular/core';
import {Student} from "../Student";
import {StudentService} from "./student.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'student-data-json';

  student: Array<Student> = [];
  error: boolean = true;
  errorMessage: string = "";

  constructor(private studentService: StudentService) {
    this.studentService.getAllStudent().subscribe(
      (data) => {
        this.student = data;
        this.error = false;
        this.errorMessage = "";
        console.log(this.student);

      }, (err) => {
        console.log("Error while fetching the notes");
        this.error = true;
        if (err.status == 404) {
          this.errorMessage = "Page does not exists";
        } else if (err.status == 400) {
          this.errorMessage = "Request failed";
        } else {
          this.errorMessage = "Service unavailable";
        }

      }
    )
  }

  onStudentAdded(student: any) {
    console.log("In onStudentAdded", student);
    this.studentService.addStudent(student).subscribe(
      (data) => {
        this.student.push(data);
        this.error = false;
        this.errorMessage = "";
      }, (err) => {
        console.log("Error while fetching the notes");
        this.error = true;
        if (err.status == 404) {
          this.errorMessage = "Page does not exists";
        } else if (err.status == 400) {
          this.errorMessage = "Request failed";
        } else {
          this.errorMessage = "Service unavailable";
        }
      }
    )
  }
}
