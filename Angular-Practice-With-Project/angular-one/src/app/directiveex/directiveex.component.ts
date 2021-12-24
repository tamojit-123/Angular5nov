import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directiveex',
  templateUrl: './directiveex.component.html',
  styleUrls: ['./directiveex.component.css']
})
export class DirectiveexComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  people: any[] = [
    {
      "name": "Tamojit",
      "age": 30,
      "country": "India"
    },
    {
      "name": "Shubham",
      "age": 30,
      "country": "USA"
    },
    {
      "name": "Chaitali",
      "age": 30,
      "country": "Canada"
    },
    {
      "name": "Gaurav",
      "age": 30,
      "country": "England"
    },
    {
      "name": "Pratyush",
      "age": 30,
      "country": "Russia"
    },
    {
      "name": "Subrata",
      "age": 30,
      "country": "Germany"
    },
  ]

}
