import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from './post-model';
import { CreatePostPayload } from '../post/create-post/create-post-payload';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  createGame(postPayload: CreatePostPayload) {
    throw new Error('Method not implemented.');
  }
  createPost(postPayload: CreatePostPayload) {
    return this.http.post('http://localhost:8080/api/posts/', postPayload);
  }

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts');
  }
}
