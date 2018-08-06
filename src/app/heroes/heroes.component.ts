import { Component, OnInit } from '@angular/core';
import { Avenger } from '../avenger';
import { avengers } from '../mock-avengers';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  hero: Avenger;
  avengers2018 : Avenger[];

  getHeroes() : void{
    this.avengers2018 =this.heroService.get2018Avengers();
  }

  ngOnInit() {
    this.getHeroes();
  }


  onSelect(hero: Avenger): void {
    this.hero = hero;
  }
}
