import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  subHeading = 'Keep calm!!';

  constructor() {
  }

  ngOnInit(): void {

  }

  @Input()
  childMessage: string = '';

  @Output()
  myOutput: EventEmitter<string> = new EventEmitter()
  outputMessage: string = 'I am a child component';

  sendMessage() {
    // @ts-ignore
    this.myOutput.emit(this.outputMessage);
  }

}
