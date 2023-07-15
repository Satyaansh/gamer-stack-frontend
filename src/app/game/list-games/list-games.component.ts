import { Component, OnInit } from '@angular/core';
import { GameModel } from '../game-model';
import { GameService } from '../game.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {

  games: Array<GameModel>;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getAllGames().subscribe(data => {
      this.games = data;
    }, error => {
      throwError(error);
    })
  }
}