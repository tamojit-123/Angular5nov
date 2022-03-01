import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {endDateValid, startDateValid} from "../../validate";

@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.component.html',
  styleUrls: ['./livestream.component.css']
})
export class LivestreamComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  liveStream!: FormGroup;

  constructor(private breakpointObserver: BreakpointObserver, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.liveStream = this.formBuilder.group({
      'title': new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      'StartDate': new FormControl(null, [Validators.required,startDateValid]),
      'EndDate': new FormControl(null, Validators.required),
      'time': new FormControl(null, Validators.required),
      'text': new FormControl(null, [Validators.required])
    })
  }

  onSubmit(liveStream: FormGroup) {
    console.log(liveStream.value)
  }

}
