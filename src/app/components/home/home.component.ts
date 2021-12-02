import { AllPlayersComponent } from './../all-players/all-players.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  playerNum!: number;
  constructor() { }

  ngOnInit(): void {
  }

  playerCount(num: any){
    this.playerNum = num;
    console.log('output works' + this.playerNum);
  }

}
