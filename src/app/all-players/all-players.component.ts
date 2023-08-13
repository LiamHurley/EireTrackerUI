import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayersService } from '../players.service';
import { Player } from '../shared/models/player';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, CommonModule],
})
export class AllPlayersComponent implements OnInit{
  players: Player[] = [];
  displayedColumns: string[] = ['name', 'position', 'club'];
  dataSource!: MatTableDataSource<Player>;
  statsDisplayed = 'general';

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private PlayersService: PlayersService){  }

  ngOnInit(): void {
    this.getAllPlayers(); 
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
      this.dataSource = new MatTableDataSource <Player> (data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      return data
    });
  }

  toggleGkStats(){
    //set datasource to gks only
    this.statsDisplayed = 'gk';
    this.players = this.players.filter(x => x.position === 'G');
    this.dataSource = new MatTableDataSource<Player>(this.players);
    
    //set displayedColumns
    this.displayedColumns.push('clean sheets');
  }
}
