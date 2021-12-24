import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;
  newHero: Hero = new Hero();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  save(): void {
    this.heroes.push(this.newHero);
    this.newHero = new Hero();
    console.log(this.heroes);
  }

}
