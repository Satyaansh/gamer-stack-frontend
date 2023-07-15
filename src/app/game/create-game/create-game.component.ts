import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GameModel } from '../game-model';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit{
  createGameForm: FormGroup;
  gameModel: GameModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private gameService: GameService) {
    this.createGameForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.gameModel = {
      name: '',
      description: ''
    }
  }

  ngOnInit(): void {
      
  }

  createGame() {
    this.gameModel.name = this.createGameForm.get('title').value;
    this.gameModel.description = this.createGameForm.get('description').value;
    this.gameService.createGame(this.gameModel).subscribe(data => {
      this.router.navigateByUrl('/list-games');
    }, error => {
      console.log('Error occurred');
    })
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  
}
