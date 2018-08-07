import { Injectable } from '@angular/core';
import { Avenger } from './avenger';
import { avengers } from './mock-avengers';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  get2018Avengers(): Observable<Avenger[]> {
    return of(avengers);
  }
  getHero(realName: string): Observable<Avenger> {
    // TODO: send the message _after_ fetching the hero
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(avengers.find(hero => hero.realName === realName));
  }
  constructor() { }
}
