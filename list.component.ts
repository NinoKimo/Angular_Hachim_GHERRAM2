import { Component, OnInit } from '@angular/core';

import { POSTS } from '../@shared/mock';
import { Post } from '../@shared/models/post';
import { PostService } from '../@shared/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts: Post[] = POSTS;
  

  constructor(private postService: PostService) { } //Creation service

  ngOnInit(): void {
    console.log("posts > ", this.posts);
    this.postService.get().subscribe(posts=>{
      this.posts=posts
    });
  }

  

  addItem(newItem: Post) {
    this.postService.add(newItem).subscribe((p:Post)=> { //appelle la focntion post dans post.service.ts
      this.posts.push(p)
    })  
  }

  delete(post:string){
    this.posts = this.posts.filter(item => item._id !== post)
    this.postService.delete(post).subscribe();
  }

}
