import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Account} from '../account';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) {
  }

  ngOnInit(): void {
  }

  username: string = '';
  password: string = '';
  error: boolean = false;

  login() {
    this.accountService.confirmUser().subscribe((users: any) => {
      users.forEach((data: Account) => {
        if (data.email == this.username && data.password == this.password) {
          this.accountService.isLoggedin = true;
          this.accountService.userID != data.id;
          console.log(data);
          this.router.navigate(["body"]);
        } else {
          this.error = true;
        }
      })
    });
  }
}
