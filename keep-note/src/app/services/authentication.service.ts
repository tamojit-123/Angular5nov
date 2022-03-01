import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from '../user';
import {Observable} from "rxjs";

@Injectable()
export class AuthenticationService {

  private authUrl = 'http://localhost:8089/api/v1/auth';
  constructor(public http: HttpClient) {

  }

  public authenticateUser(user: User):Observable<any> {
    return this.http.post<any>(`${this.authUrl}/login`, user);
  }

  public createUser(user: User):Observable<User>{
    return this.http.post<any>(`${this.authUrl}/register`, user);
  }

  public setBearerToken(token: string) {
    localStorage.setItem('bearerToken', token);
  }

  public getBearerToken() {
    return localStorage.getItem('bearerToken');
  }

  public setUserId(userId : string){
    localStorage.setItem('userId', userId);
  }
  public getUserId(){
    return localStorage.getItem('userId');
  }
}
