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
  constructor() { }
}
