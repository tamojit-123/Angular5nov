import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  name: string = '';
  password: string = '';
  nameValidationOutput: string = '';
  passwordValidationOutput: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  show() {
    // @ts-ignore
    document.getElementById("demo").innerHTML = `<p>Demo is clicked</p>`;
  }

  validation() {
    this.passwordValidationOutput = '';
    this.nameValidationOutput = '';
    if (this.name.length == 0) {
      this.nameValidationOutput += ' Name is not valid ';
    } else {
      this.nameValidationOutput += ' Name is valid ';
    }
    if (this.password.length == 0) {
      this.passwordValidationOutput += ' password is not valid ';
    } else {
      this.passwordValidationOutput += ' password is valid ';
    }
  }
}
