import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';
import { PlayerWithStatsAndPerformances } from '../shared/models/player-with-stats-and-performances';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css'],
  standalone: true
})
export class PlayerCardComponent implements OnInit{
  player!: PlayerWithStatsAndPerformances;

  constructor(
    private route: ActivatedRoute,
    private PlayersService: PlayersService
  ){ }
  
  ngOnInit(): void {
    this.getPlayerById();
  }

  getPlayerById(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('playerId')!, 10);
    this.PlayersService.getPlayerById(id)
      .subscribe(player => this.player = player);
  }

}
