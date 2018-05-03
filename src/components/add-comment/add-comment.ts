import { Component } from '@angular/core';
import { DateTime, NavParams, ViewController } from 'ionic-angular';
import { CommentProvider } from '../../providers/comment/comment';
import { PatientProvider } from '../../providers/patient/patient';
import { Comment } from '../../models/comment';
import { Doctor } from '../../models/doctor';
import { Nurse } from '../../models/nurse';
import { UtilsProvider } from '../../providers/utils/utils';

@Component({
  selector: 'add-comment',
  templateUrl: 'add-comment.html',
})
export class AddCommentComponent {

  public uId;
  public uRole;
  private comment: Comment = new Comment();
  private categories = ['Diagnosis', 'Treatment', 'Note'];
  private severities = [{ id: 0, desc: 'Not available' }, { id: 1, desc: 'Low' }, { id: 2, desc: 'Medium' },
   { id: 3, desc: 'High' }];
  private patientId: string;
  private severity;
  private createdBy: string;

  constructor(navParams: NavParams, private viewCtrl: ViewController, private utl: UtilsProvider,
              private commentProvider: CommentProvider, private patientProvider: PatientProvider) {
    this.uId = navParams.get('uId');
    this.uRole = navParams.get('uRole');
    this.comment.category = 'Diagnosis';
    this.patientId = navParams.get('patientId');
    this.severity = { id: navParams.get('severity') };

    if (this.uRole === 'administrators') {
      this.utl.col('administrators').doc(this.uId).valueChanges().subscribe((data) => {
        this.createdBy = data.name + ' [admin]';
      });
    } else if (this.uRole === 'doctors') {
      this.utl.col('doctors').doc<Doctor>(this.uId).valueChanges().subscribe((data) => {
        this.createdBy = 'Dr. ' + data.firstName + ' ' + data.lastName;
      });
    } else if (this.uRole === 'nurses') {
      this.utl.col('nurses').doc<Nurse>(this.uId).valueChanges().subscribe((data) => {
        this.createdBy = data.name;
      });
    }
  }

  public addComment() {
    this.commentProvider.uploadComment(this.comment, this.patientId, this.createdBy);
    this.patientProvider.updatePatientById(this.patientId, { severity: this.severity.id });
    this.dismiss(this.severity.id);
  }

  public dismiss(data?) {
    this.viewCtrl.dismiss(data);
  }

}
