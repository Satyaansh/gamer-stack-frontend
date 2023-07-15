import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameModel } from './game-model';
import { Observable } from 'rxjs';
import { PostModel } from '../shared/post-model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getAllGames(): Observable<Array<GameModel>> {
    return this.http.get<Array<GameModel>>('http://localhost:8080/api/subreddit/');
  }

  createGame(gameModel: GameModel): Observable<GameModel> {
    return this.http.post<GameModel>('http://localhost:8080/api/subreddit',
      gameModel);
  }

}
