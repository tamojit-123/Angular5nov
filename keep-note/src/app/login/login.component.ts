import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {FormControl, Validators} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";
import {RouterService} from "../services/router.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  submitMessage: string="";
  private bearerToken: any;
  private user: User;
  username = new FormControl('',[Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(4)]);

  constructor(private authService: AuthenticationService, private routerService: RouterService) {
    this.user = new User();
  }

  loginSubmit() {
    this.user.userId = this.username.value;
    this.user.userPassword = this.password.value;
    this.authService.authenticateUser(this.user).subscribe(
        (res: { [x: string]: any; }) => {
        this.bearerToken = res['token'];
        this.authService.setBearerToken(this.bearerToken);
        this.authService.setUserId(this.username.value);
        this.routerService.routeToNoteView();
      },
        (err: { status: number; message: string; error: { message: string; }; }) => {
        if (err.status === 404) {
          this.submitMessage = err.message;
        }
        if (err.status === 403) {
          this.submitMessage = err.error.message;
        }
        this.submitMessage = 'Invalid user details';
      });
  }

  routeToSignUp() {
    this.routerService.routeToSignUp();
  }

}
