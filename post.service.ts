import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Post } from './models/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  deletePost(post: string) {
    throw new Error('Method not implemented.');
  }
  postFunction(newItem: Post) {
    throw new Error('Method not implemented.');
  }
  getFunction() {
    throw new Error('Method not implemented.');
  }
token="1ab4d21eddda40fba591604e351aa532"
  constructor(
    private httpClient: HttpClient
  ) {
  }

  get() {
    return this.httpClient.get<Post[]>(`https://crudcrud.com/api/${this.token}/posts`);
  }

  add(post: Post) {
    return this.httpClient.post<Post>(`https://crudcrud.com/api/${this.token}/posts`, post);
  }

  delete(postId: string) {
    return this.httpClient.delete(`https://crudcrud.com/api/${this.token}/posts/${postId}`);
  }

  edit(postId: number, postEdited: Post) {
    //NOTE: postEdited ne doit pas avoir de propriété _id, l'api de crudcrud.com ne l'autorise pas avec le PUT
    //NOTE: si besoin de supprimer la propriété => delete postEdited._id
    return this.httpClient.put(`https://crudcrud.com/api/${this.token}/posts/${postId}`, postEdited);
  }

}