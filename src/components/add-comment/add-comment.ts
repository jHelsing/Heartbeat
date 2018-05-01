import { Component } from '@angular/core';
import { DateTime, NavParams, ViewController } from 'ionic-angular';
import { CommentProvider } from '../../providers/comment/comment';
import { PatientProvider } from '../../providers/patient/patient';
import { Comment } from '../../models/comment';

@Component({
  selector: 'add-comment',
  templateUrl: 'add-comment.html',
})
export class AddCommentComponent {

  private comment: Comment = new Comment();
  private categories = ['Diagnosis', 'Treatment', 'Note'];
  private severities = [{ id: 0, desc: 'Not Set' }, { id: 1, desc: 'Low' }, { id: 2, desc: 'Medium' },
   { id: 3, desc: 'High' }];
  private patientId: string;
  private severity;

  constructor(navParams: NavParams, private viewCtrl: ViewController,
              private commentProvider: CommentProvider, private patientProvider: PatientProvider) {
    this.comment.category = 'Diagnosis';
    this.patientId = navParams.get('patientId');
    this.severity = { id: navParams.get('severity') };
  }

  public addComment() {
    this.commentProvider.uploadComment(this.comment, this.patientId);
    this.patientProvider.updatePatientById(this.patientId, { severity: this.severity.id });
    this.dismiss();
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

}
