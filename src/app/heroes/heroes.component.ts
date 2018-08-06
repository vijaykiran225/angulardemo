import { Component, OnInit } from '@angular/core';
import { Avenger } from '../avenger';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  hero:Avenger ={
    realName:'P.Parker',
    avengerName:'Spiderman'
  }
  ngOnInit() {
  }

}
