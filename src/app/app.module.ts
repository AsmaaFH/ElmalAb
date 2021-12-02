import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { HomeComponent } from './components/home/home.component';
import { AllPlayersComponent } from './components/all-players/all-players.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from '@angular/router';
import { AutoFocusDirective } from './directives/auto-focus.directive';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddPlayerComponent,
    HomeComponent,
    AllPlayersComponent,
    FooterComponent,
    AutoFocusDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBFqUMxsvTJ8BOthjMMojl2Azq8Pvw_S1U",
      authDomain: "elmalab-db3e1.firebaseapp.com",
      projectId: "elmalab-db3e1",
      storageBucket: "elmalab-db3e1.appspot.com",
      messagingSenderId: "772892228297",
      appId: "1:772892228297:web:a21915986fcee8ea926b18"
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
