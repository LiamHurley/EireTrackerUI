import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPlayersComponent } from './all-players/all-players.component';
import { PlayerCardComponent } from './player-card/player-card.component';

const routes: Routes = [
  { path: 'players', component: AllPlayersComponent },
  { path: 'player/:playerId', component: PlayerCardComponent },
  { path: '',   redirectTo: '/players', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
