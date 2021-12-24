import {Component, Input, OnInit} from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-heroe-details',
  templateUrl: './heroe-details.component.html',
  styleUrls: ['./heroe-details.component.css']
})
export class HeroeDetailsComponent implements OnInit {

  @Input()
  hero?:Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
