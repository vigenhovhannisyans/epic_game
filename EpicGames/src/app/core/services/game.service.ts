import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  JSON_PATH = environment.json;
  constructor(
    private http: HttpClient,
    private route: Router
  ) { }


  getAllGames(): Observable<Game[]>{
    return this.http.get<Game[]>(`${this.JSON_PATH}/game.json`)
  }
  redirectToAboutGamePage(gameId: number): void{
    this.route.navigate(['/about-game'],{queryParams: {gameId: gameId}})
  }

}
