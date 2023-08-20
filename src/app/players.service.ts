import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Player } from './shared/models/player';
import { PlayerWithStatsAndPerformances } from './shared/models/player-with-stats-and-performances';
import { catchError } from 'rxjs/operators';
import { environment } from './../environments/environment';
import * as mockedOverallData from '../app/mock-data/mock-players-overall.json'
import * as mockedGkData from '../app/mock-data/mock-player-gk.json'
import * as mockedOutfielderData from '../app/mock-data/mock-player-outfield.json'

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private playersWithOverallStatsUrl = 'https://localhost:7247/api/Players/overall';
  private playerByIdWithStatsAndPerformancesUrl = 'https://localhost:7247/api/Players';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]>{
    // if(environment.mockedBackend){
    //   return of(mockedOverallData);
    // }
    return this.http.get<Player[]>(this.playersWithOverallStatsUrl).pipe(
      catchError(this.handleError<Player[]>('getPlayers', []))
    );
  }
  
  getPlayerById(playerId: number): Observable<PlayerWithStatsAndPerformances>{
    // if(environment.mockedBackend){
    //   if(playerId !== 788128)
    //     return of(mockedOutfielderData);
    //   else
    //     return of(mockedGkData);
    // }
    const url = `${this.playerByIdWithStatsAndPerformancesUrl}/${playerId}`;
    return this.http.get<PlayerWithStatsAndPerformances>(url).pipe(
      catchError(this.handleError<PlayerWithStatsAndPerformances>(`getPlayerById id=${playerId}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
