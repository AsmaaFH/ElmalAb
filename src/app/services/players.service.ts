import { Iplayer } from './../interfaces/iplayer';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  num!: number;
  playersLength! :number;
  playerNum  = new BehaviorSubject<number>(this.playersLength);
  constructor(private db: AngularFirestore) {
    this.getAllPlayers().subscribe(data =>{
      this.playersLength = data.length;
      console.log(this.playersLength);
      this.playerNum.next(this.playersLength);
    });

   }

  getAllPlayers(){
    return this.db.collection<Iplayer>('/players').snapshotChanges();
  }

  addPlayer(name: any){
    return this.db.collection('/players').add({name: name});
  }

  deletePlayer(id:string | undefined){
    return this.db.doc(`players/${id}`).delete();
  }

  deletePlayers(){
    this.db.collection('players').get().toPromise()
    .then((querySnapshot) => {
      querySnapshot.forEach(doc =>{
        doc.ref.delete();
      })
    })
  }

}
