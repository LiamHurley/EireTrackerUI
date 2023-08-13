import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Player } from './shared/models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private playersUrl = 'https://localhost:7247/api/Players/all';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]>{
    return this.http.get<Player[]>(this.playersUrl);
  }   
}
