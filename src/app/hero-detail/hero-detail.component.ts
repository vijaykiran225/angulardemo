import { Component, OnInit,Input } from '@angular/core';
import { Avenger } from '../avenger';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() someAvenger: Avenger;
  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) {
  
  }

  ngOnInit(): void {
    this.getHero();
  }
  goBack(): void {
    this.location.back();
  }
  getHero(): void {
    const id = this.route.snapshot.paramMap.get('realName');
    this.heroService.getHero(id)
      .subscribe(hero => this.someAvenger = hero);
  }

}
