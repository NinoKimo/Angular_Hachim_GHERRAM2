import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../@shared/models/post';
import { IdGeneratorUtils } from '../@shared/utils/id-generator.utils';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Input("postEditing") set postEditing(post: Post) {
    //TODO: on met à jour les valeurs du formulaire
  };
  @Output() onPostCreated: EventEmitter<Post>;

  postForm: FormGroup;

  constructor() {
    this.onPostCreated = new EventEmitter();
    this.createForm();
  }

  ngOnInit() {
  }

  onSubmit() {
    const post: Post = {
      link: this.postForm.get("link").value,
      title: this.postForm.get("title").value,
      description: this.postForm.get("description").value
    };

    //NOTE: Emit dans le cas de la création d'un nouveau post
    this.onPostCreated.emit(post);

    this.postForm.reset();
  }

  private createForm() {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl(),
      link: new FormControl('', Validators.required),
    });
  }

}