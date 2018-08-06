import { Component, OnInit } from '@angular/core';
import { Avenger } from '../avenger';
import { avengers } from '../mock-avengers';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  avengers2018=avengers;

  ngOnInit() {
  }

  hero: Avenger;

  onSelect(hero: Avenger): void {
    this.hero = hero;
  }
}
