import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(contactForm: any) {
    console.log(contactForm.value);
  }

  countryList: Country[] = [
    new Country("1", "India"),
    new Country("2", "USA"),
    new Country("3", "UK"),
  ];
}

export class Country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

