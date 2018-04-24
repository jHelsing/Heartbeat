import { Component } from '@angular/core';
import { DateTime, NavParams, ViewController } from 'ionic-angular';
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
    this.comment.category = 'Diagnosis';
    this.patientId = navParams.get('patientId');
  }

  public addComment() {
    this.commentProvider.uploadComment(this.comment, this.patientId);
    this.dismiss();
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

}
