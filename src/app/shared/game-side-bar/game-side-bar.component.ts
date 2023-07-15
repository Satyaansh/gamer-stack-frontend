import { Component, OnInit } from '@angular/core';
import { GameModel } from 'src/app/game/game-model';
import { GameService } from 'src/app/game/game.service';

@Component({
  selector: 'app-game-side-bar',
  templateUrl: './game-side-bar.component.html',
  styleUrls: ['./game-side-bar.component.css']
})
export class GameSideBarComponent implements OnInit{
  games: Array<GameModel> = [];
  displayViewAll: boolean;

  constructor(private gameService: GameService) {
    this.gameService.getAllGames().subscribe(data => {
      if (data.length > 3) {
        this.games = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.games = data;
      }
    });
   }

  ngOnInit(): void {
    
  }
}
