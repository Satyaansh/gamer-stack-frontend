import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatePostPayload } from './create-post-payload';
import { GameModel } from 'src/app/game/game-model';
import { Router } from '@angular/router';
import { PostService } from 'src/app/shared/post.service';
import { GameService } from 'src/app/game/game.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit{
  createPostForm: FormGroup;
  postPayload: CreatePostPayload;
  subreddits: Array<GameModel>;

  constructor(private router: Router, private postService: PostService, private gameService: GameService) {
    this.postPayload = {
      postName: '',
      url: '',
      description: '',
      subredditName: ''
    }
  }

  

  createPost() {
    this.postPayload.postName = this.createPostForm.get('postName').value;
    this.postPayload.subredditName = this.createPostForm.get('subredditName').value;
    this.postPayload.url = this.createPostForm.get('url').value;
    this.postPayload.description = this.createPostForm.get('description').value;

    this.postService.createPost(this.postPayload).subscribe((data: any) => {
      this.router.navigateByUrl('/');
    }, (error: any) => {
      throwError(error);
    })
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
    this.createPostForm = new FormGroup({
      postName: new FormControl('', Validators.required),
      subredditName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });

    this.gameService.getAllGames().subscribe((data: any) => {
      this.subreddits = data;
    }, (error: any) => {
      throwError(error);
    });
  }

  
}
