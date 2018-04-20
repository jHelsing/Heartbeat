import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { CommentProvider } from '../../providers/comment/comment';
import { Comment } from '../../models/comment';

@Component({
  selector: 'add-comment',
  templateUrl: 'add-comment.html',
})
export class AddCommentComponent {

  private comment: Comment = new Comment();
  private categories = ['Diagnosis', 'Treatment', 'Note'];
  private patientId: string;

  constructor(navParams: NavParams, private viewCtrl: ViewController,
              private commentProvider: CommentProvider) {
    this.patientId = navParams.get('patientId');
  }

  public addComment() {
    console.log(this.comment.category);
    this.commentProvider.uploadComment(this.comment, this.patientId);
    this.viewCtrl.dismiss(this.comment);
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

}
