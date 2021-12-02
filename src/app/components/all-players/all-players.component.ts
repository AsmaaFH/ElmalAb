import { SharedServiceService } from './../../services/shared-service.service';
import { Iplayer } from './../../interfaces/iplayer';
import { PlayersService } from './../../services/players.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css']
})
export class AllPlayersComponent implements OnInit {

  players: Iplayer[] = [];
  playersLength: number = 0;

  @Output() playersCount = new EventEmitter();

  constructor(private playersService: PlayersService, private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    this.playersService.getAllPlayers().subscribe(res =>{
      this.players = res.map(element => {
        return{
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        }
      })
      this.playersLength = this.players.length;
      this.PlayersNum();
    });
  }

  delete(id: string | undefined){
    this.playersService.deletePlayer(id).then(res =>{
      console.log('successfully deleted');
      this.PlayersNum()
    });
  }

  PlayersNum(){
      this.playersCount.emit(this.playersLength);
      this.sharedService.followPlayersLenght.subscribe(num =>{
        num = this.playersLength;
        console.log(this.sharedService.playerNum)
      });
  }

  clear(){
    this.playersService.deletePlayers();
  }

}
