import { Iplayer } from './../../interfaces/iplayer';
import { PlayersService } from './../../services/players.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-groups',
  templateUrl: './players-groups.component.html',
  styleUrls: ['./players-groups.component.css']
})
export class PlayersGroupsComponent implements OnInit {

  players: Iplayer[] = [];
  groupA: Iplayer[] = [];
  groupB: Iplayer[] = [];
  groupC: Iplayer[] = [];
  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.playersService.getAllPlayers().subscribe(res =>{
      this.players = res.map(element => {
        return{
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        }
      })
      //Shuffle the Players
      this.shuffle(this.players);

      this.players.forEach(element => {
        if(this.players.indexOf(element)<7){
          this.groupA.push(element);
        }
      });
      this.players.forEach(element => {
        if(this.players.indexOf(element)>=7 && this.players.indexOf(element)<14){
          this.groupB.push(element);
        }
      });
      this.players.forEach(element => {
        if(this.players.indexOf(element)>=14 && this.players.indexOf(element) < 21){
          this.groupC.push(element);
        }
      });
    });
  }

  shuffle(array: Array<object>) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}


