import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-attributeex',
  templateUrl: './attributeex.component.html',
  styleUrls: ['./attributeex.component.css']
})
export class AttributeexComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  items = [
    {name: "APPLE", type: "fruit"},
    {name: "BANANA", type: "fruit"},
    {name: "CARROT", type: "vegetable"},
  ];

  getcolor(type: any) {
    if (type == 'fruit') {
      return 'red';
    } else {
      return 'yellow';
    }
  }
}
