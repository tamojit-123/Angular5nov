import {Component, OnInit} from '@angular/core';
import {AccountService} from '../account.service';
import {Account} from '../account';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
  }

  password2: string = "";

  user: Account =
    {
      email: "",
      password: ""
    }

  register() {
    this.accountService.registerUser(this.user).subscribe(data => {
      console.log("post success")
    });
  }
}
