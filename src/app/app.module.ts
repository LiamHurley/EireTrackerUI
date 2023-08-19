import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPlayersComponent } from './all-players/all-players.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerCardComponent } from './player-card/player-card.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AllPlayersComponent,
    BrowserAnimationsModule,
    PlayerCardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
