import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from "../Student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) {
  }

  private api: string = "http://localhost:3000/student";

  getAllStudent(): Observable<Array<Student>> {
    return this.httpClient.get<Array<Student>>(this.api);

  }

  addStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.api, student);
  }

}
