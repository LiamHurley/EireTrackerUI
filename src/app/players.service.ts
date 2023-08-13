import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Player } from './shared/models/player';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private playersUrl = 'https://localhost:7247/api/Players/overall';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]>{
    return this.http.get<Player[]>(this.playersUrl)
    .pipe(
      catchError(this.handleError<Player[]>('getPlayers', []))
    );;
  }   

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
