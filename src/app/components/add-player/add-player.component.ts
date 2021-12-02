import { PlayersService } from './../../services/players.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  wrongPlayerName: string ='';

  @Input() PlayerNumInAddPlayer : number = 0;
  @ViewChild('playerName') nameInput!: ElementRef;
  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
  }

  addPlayer(name: string){
    if(name !== '' && name.length>=2){
      this.wrongPlayerName = '';
      this.playersService.addPlayer(name)
    }else{
      this.wrongPlayerName = 'Please Enter valid Name';
    }
    this.nameInput.nativeElement.value = '';
  }

}
