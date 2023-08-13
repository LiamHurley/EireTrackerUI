import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';
import { Player } from '../shared/models/player';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css']
})
export class AllPlayersComponent implements OnInit{
  players: Player[] = [];
  constructor(private PlayersService: PlayersService){ }

  ngOnInit(): void {
      this.PlayersService.getPlayers()
        .subscribe(p => this.players = p);
  }
}
