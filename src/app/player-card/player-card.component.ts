import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PlayersService } from '../players.service';
import { Performance, PlayerWithStatsAndPerformances } from '../shared/models/player-with-stats-and-performances';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css'],
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatPaginatorModule, NgStyle, CommonModule]
})
export class PlayerCardComponent implements OnInit, AfterViewInit{
  player!: PlayerWithStatsAndPerformances;
  dataSource!: MatTableDataSource<Performance>;
  outfieldPerformanceTableColumnNames = ['matchDate', 'homeTeam', 'homeAway', 'homeScore', 'goals', 'goalAssist', 'totalPass', 'minutesPlayed', 'rating'];
  gkPerformanceTableColumnNames = ['matchDate', 'homeTeam', 'homeAway', 'homeScore', 'saves', 'rating'];

  constructor(
    private route: ActivatedRoute,
    private PlayersService: PlayersService
  ){ }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  ngOnInit(): void {
    this.getPlayerById();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getPlayerById(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('playerId')!, 10);
    this.PlayersService.getPlayerById(id).subscribe((data: PlayerWithStatsAndPerformances) => {
        this.player = data;
        this.dataSource = new MatTableDataSource<Performance>(this.player.performances.reverse());
        return data
      });  
  }
}
