import { Subject } from 'rxjs';
import { SharedServiceService } from './../../services/shared-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //playersLengthSubscription: Subscription
  playersNum!: number;
  constructor(public router:Router, private playerService: PlayersService) {
   }

  ngOnInit(): void {
    this.playerService.playerNum.subscribe(x =>{
      this.playersNum = x;
    });
  }

}
