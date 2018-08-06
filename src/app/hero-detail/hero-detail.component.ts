import { Component, OnInit,Input } from '@angular/core';
import { Avenger } from '../avenger';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() someAvenger: Avenger;
  constructor() { }

  ngOnInit() {
  }

}
