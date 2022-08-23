import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(private postService : PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      {
        next: (posts)=>{
          console.log(posts);
        }
      }
    )
  }

}
