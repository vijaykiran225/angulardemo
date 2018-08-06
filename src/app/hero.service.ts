import { Injectable } from '@angular/core';
import { Avenger } from './avenger';
import { avengers } from './mock-avengers';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  get2018Avengers():Avenger[] {
    return avengers;
  }
  constructor() { }
}
