import {HttpClient} from '@angular/common/http';
import {ThrowStmt} from '@angular/compiler';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  isLoggedin: boolean = false;
  userID: number = 1;

  constructor(private httpClient: HttpClient) {
  }

  apiurl: string = "http://localhost:3000/account";

  accountapiurl: string = "http://localhost:3000/mailAccount";

  emailapiurl: string = "http://localhost:3000/emails";

  registerUser(user: any): Observable<any> {
    return this.httpClient.post<any>(this.apiurl, user);
  }

  confirmUser(): Observable<any> {
    return this.httpClient.get<any>(this.apiurl);
  }

  saveAccount(data: any): Observable<any> {
    return this.httpClient.post<any>(this.accountapiurl, data);
  }

  getAccount(): Observable<any> {
    return this.httpClient.get<any>(this.accountapiurl);
  }

  postEmailSchedule(data: any): Observable<any> {
    return this.httpClient.post<any>(this.emailapiurl, data);
  }

  getEmailSchedule(): Observable<any> {
    return this.httpClient.get<any>(this.emailapiurl);
  }
}
