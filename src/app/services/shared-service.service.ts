import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  followPlayersLenght!: BehaviorSubject<number>;
  playerNum!: number;

  constructor() {
    this.followPlayersLenght = new BehaviorSubject(this.playerNum);
   }
}
