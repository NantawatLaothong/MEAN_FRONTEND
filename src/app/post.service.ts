import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = 'http://localhost:3000/protected';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.url);
  }

  addPost(post: Post): Observable<Post>{
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(post)
    return this.http.post<Post>(this.url, body, {'headers':headers});
  }
}
