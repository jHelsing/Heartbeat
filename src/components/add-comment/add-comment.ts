import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { CommentProvider } from '../../providers/comment/comment';
import { PatientProvider } from '../../providers/patient/patient';
import { Comment } from '../../models/comment';
import { Doctor } from '../../models/doctor';
import { Nurse } from '../../models/nurse';
import { Administrator } from '../../models/administrator';
import { UtilsProvider } from '../../providers/utils/utils';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'add-comment',
  templateUrl: 'add-comment.html',
})
export class AddCommentComponent {

  public categories = ['Diagnosis', 'Treatment', 'Note'];
  public severities = [{ id: 0, desc: 'Not available' }, { id: 1, desc: 'Low' }, { id: 2, desc: 'Medium' },
   { id: 3, desc: 'High' }];
  private comment: Comment = new Comment();
  private patientId: string;
  private severity;
  private createdBy: string;

  constructor(navParams: NavParams, private viewCtrl: ViewController, private utl: UtilsProvider,
              private commentProvider: CommentProvider, private patientProvider: PatientProvider, storage: Storage) {
    storage.get('user').then((data) => {
      this.setCreatedBy(data);
    });
    this.comment.category = 'Diagnosis';
    this.patientId = navParams.get('patientId');
    this.severity = { id: navParams.get('severity') };
  }

  public addComment() {
    this.commentProvider.uploadComment(this.comment, this.patientId, this.createdBy);
    this.patientProvider.updatePatientById(this.patientId, { severity: this.severity.id });
    this.dismiss(this.severity.id);
  }

  public dismiss(data?) {
    this.viewCtrl.dismiss(data);
  }

  private setCreatedBy(user) {
    switch (user.role) {
    case 'administrators':
      this.utl.col('administrators').doc<Administrator>(user.id).valueChanges().subscribe((data) => {
        this.createdBy = data.name + ' [administrator]';
      });
      break;
    case 'doctors':
      this.utl.col('doctors').doc<Doctor>(user.id).valueChanges().subscribe((data) => {
        this.createdBy = 'Dr. ' + data.firstName + ' ' + data.lastName;
      });
      break;
    case 'nurses':
      this.utl.col('nurses').doc<Nurse>(user.id).valueChanges().subscribe((data) => {
        this.createdBy = data.name;
      });
      break;
    }
  }
}
