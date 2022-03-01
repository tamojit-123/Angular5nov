import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidateUrl} from "../url.validation";

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  courseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      'CourseName': new FormControl(null, Validators.required),
      'courseDes': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'courseAmt': new FormControl(null, Validators.required),
      'courseUrl': new FormControl('', [Validators.required, ValidateUrl])
    })
  }

  onSubmit(courseForm: FormGroup) {
    console.log(courseForm.value)
  }
}
