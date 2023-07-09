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

  getAllSubreddits(): Observable<Array<GameModel>> {
    return this.http.get<Array<GameModel>>('http://localhost:8080/api/subreddit/');
  }

}
