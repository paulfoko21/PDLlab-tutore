import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionClickService {

  constructor() { }
  private cardClickSource = new Subject<void>();

  cardClick$ = this.cardClickSource.asObservable();

  login() {
    this.cardClickSource.next();
  }
}
