import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PlayersService } from '../players.service';
import { Player } from '../shared/models/player';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, CommonModule, MatButtonToggleModule],
})
export class AllPlayersComponent implements OnInit{
  players: Player[] = [];
  displayedGeneralColumns: string[] = ['name', 'position', 'club', 'overallStatsDto.matchesPlayed', 'overallStatsDto.minutesPlayed', 'overallStatsDto.goals', 'overallStatsDto.goalAssist', 'overallStatsDto.rating'];
  displayedColumns: string[] = this.displayedGeneralColumns;
  displayedColumnsForGkStats: string[] = ['name', 'position', 'club', 'overallStatsDto.matchesPlayed', 'overallStatsDto.minutesPlayed', 'overallStatsDto.cleanSheets', 'overallStatsDto.rating'];
  displayedColumnsForDefStats: string[] = ['name', 'position', 'club', 'overallStatsDto.matchesPlayed', 'overallStatsDto.minutesPlayed', 
                                          'overallStatsDto.duelWon', 'overallStatsDto.aerialWon', 'overallStatsDto.totalTackle', 'overallStatsDto.outfielderBlock',
                                          'overallStatsDto.errorLeadToAShot', 'overallStatsDto.rating'];
  displayedColumnsForCreativeStats: string[] = ['name', 'position', 'club', 'overallStatsDto.matchesPlayed', 'overallStatsDto.minutesPlayed', 
                                                'overallStatsDto.goalAssist', 'overallStatsDto.totalPass', 'overallStatsDto.accuratePass', 'overallStatsDto.keyPass',
                                                'overallStatsDto.accurateLongBalls', 'overallStatsDto.rating'];
  displayedColumnsForAttackingStats: string[] = ['name', 'position', 'club', 'overallStatsDto.matchesPlayed', 'overallStatsDto.minutesPlayed', 
                                                'overallStatsDto.goals', 'overallStatsDto.totalShotsTaken', 'overallStatsDto.onTargetScoringAttempt', 
                                                'overallStatsDto.bigChanceMissed', 'overallStatsDto.rating'];
  dataSource!: MatTableDataSource<Player>;
  statsDisplayed = 'general';

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) set content(sort: MatSort) {
    this.dataSource.sort = sort;
    this.dataSource.sortingDataAccessor = this.pathDataAccessor;
  }

  constructor(private PlayersService: PlayersService){  }

  ngOnInit(): void {
    this.getAllPlayers();
    this.dataSource = new MatTableDataSource<Player>(this.players); 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllPlayers(){
    this.PlayersService.getPlayers().subscribe((data: Player[]) => {
      this.players = data;
      this.setTable(data);
      return data
    });
  }

  toggleGkStats(){
    this.statsDisplayed = 'gk';
    const data = this.players.filter(x => x.position === 'G');
    this.setTable(data);
    this.displayedColumns = this.displayedColumnsForGkStats;
  }

  toggleGeneralStats(){
    this.statsDisplayed = 'general';
    this.setTable(this.players);
    this.displayedColumns = this.displayedGeneralColumns;
  }

  toggleDefensiveStats(){
    this.statsDisplayed = 'def';
    const data = this.players.filter(x => x.position === 'M' || x.position === 'D');
    this.setTable(data);
    this.displayedColumns = this.displayedColumnsForDefStats;
  }

  toggleCreativeStats(){
    this.statsDisplayed = 'creative';
    const data = this.players.filter(x => x.position !== 'G');
    this.setTable(data);
    this.displayedColumns = this.displayedColumnsForCreativeStats;
  }

  toggleAttackingStats(){
    this.statsDisplayed = 'att';
    const data = this.players.filter(x => x.position !== 'G');
    this.setTable(data);
    this.displayedColumns = this.displayedColumnsForAttackingStats;
  }

  setTable(data: Player[]){
    this.dataSource.data = data;
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator.firstPage();
  }

  pathDataAccessor(item: any, path: string): any {
    return path.split('.')
      .reduce((accumulator: any, key: string) => {
        return accumulator ? accumulator[key] : undefined;
      }, item);
  }
}
