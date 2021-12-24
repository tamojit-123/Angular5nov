import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private dialog: MatDialog, private accountService: AccountService, private router: Router) {
  }

  uid!: number;
  userAccounts: any[] = [];
  accountEmails: any[] = [];

  ngOnInit(): void {
    this.uid = this.accountService.userID;

    this.accountService.getAccount().subscribe(account => {
      this.userAccounts = account.filter((data: any) => data.userId == this.uid);
      console.log(this.userAccounts);
    });

    this.accountService.getEmailSchedule().subscribe(account => {
      this.accountEmails = account.filter((data: any) => data.userId == this.uid);
      console.log(this.accountEmails);
    });

  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);

  }

  logout() {
    this.accountService.isLoggedin = false;
    this.router.navigate(["home/login"]);
  }

  submit(data: any) {
    this.accountService.postEmailSchedule(data.value).subscribe(data => console.log("stored"));
    this.router.navigate(["body"]);
  }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  styleUrls: ['dialog-elements-example-dialog.css']
})
export class DialogElementsExampleDialog implements OnInit {

  constructor(private accountService: AccountService, private router: Router) {
  }

  userID!: number;
  readOnly: boolean = true;

  ngOnInit() {
    this.userID = this.accountService.userID;
  }

  submit(uploadForm: any) {
    console.log(uploadForm.value);
    this.accountService.saveAccount(uploadForm.value).subscribe(data => {
      console.log("saved")
    });
    this.router.navigate(["body"]);
  }

}
