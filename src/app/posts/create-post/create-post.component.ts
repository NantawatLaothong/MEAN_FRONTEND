import { Component, OnInit } from '@angular/core';
import * as bodyParser from 'body-parser';
import { Observable } from 'rxjs';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  post: Post = {id: 4, userId: 1, title: 'title', body: 'body'};
  
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    
  }

  addPost(): void{
    const post = {id: 4, userId: 1, title: this.post.title, body: this.post.body}; 
    this.postService.addPost(post).subscribe(res=>console.log(res));
    console.log(post);
  }

}
