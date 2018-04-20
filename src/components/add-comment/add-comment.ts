import { Component } from '@angular/core';
import { NavParams, Platform, ViewController } from 'ionic-angular';
import { CommentProvider } from '../../providers/comment/comment';
import { Comment } from '../../models/comment';

@Component({
  selector: 'add-comment',
  templateUrl: 'add-comment.html',
})
export class AddCommentComponent {

  public comment: Comment = new Comment();
  public categories = ['Diagnosis', 'Treatment', 'Note'];
  private patientId: string;

  constructor(private platform: Platform, private navParams: NavParams, private viewCtrl: ViewController,
              private commentProvider: CommentProvider) {
    console.log('Hello AddCommentComponent Component');
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
