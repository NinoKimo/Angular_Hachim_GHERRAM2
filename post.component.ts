import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Post } from '../@shared/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  @Input() post: Post;

  @Output() deletePostEvent = new EventEmitter<string>();

  @Output() editPostEvent = new EventEmitter<string>();

  collapsed: boolean;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    //TODO
  }

  toggle() {

  }

  deletePublication(post : Post){
    this.deletePostEvent.emit(post._id)
  }

  editPublication(post : Post){
    this.editPostEvent.emit(post._id)
  }

}
