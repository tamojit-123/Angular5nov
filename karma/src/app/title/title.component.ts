import { Component, ElementRef, Input, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input()
  message!: string;
  @Output() changeTitleEvent:EventEmitter<string>=new EventEmitter();
  @ViewChild('titleField')
  titleField!: ElementRef;
  handleButtonClick(newTitle: string | undefined){
    if(newTitle){
      this.changeTitleEvent.emit(newTitle);
      this.titleField.nativeElement.value('');
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
