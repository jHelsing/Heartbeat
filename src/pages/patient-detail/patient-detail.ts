import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { UpdatePatientPage } from '../update-patient/update-patient';
import { AddCommentComponent } from '../../components/add-comment/add-comment';
import { PatientProvider } from '../../providers/patient/patient';
import { CommentProvider } from '../../providers/comment/comment';
import { Observable } from 'rxjs/Observable';
import { Comment } from '../../models/comment';

@IonicPage()
@Component({
  selector: 'page-patient-detail',
  templateUrl: 'patient-detail.html',
})
export class PatientDetailPage {
  private patient;
  private comments: Observable<Comment[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public patientProvider: PatientProvider,
              public modalCtrl: ModalController, private commentProvider: CommentProvider) {
    this.patient = navParams.get('patient');
    this.comments = this.commentProvider.getComments(this.patient.$id);
  }
  public goToUpdatePatient(patient) {
    this.navCtrl.push(UpdatePatientPage, { patient });
  }

  public addComment() {
    const commentModal = this.modalCtrl.create(AddCommentComponent, { patientId: this.patient.$id }, {});
    commentModal.present();

  }
}
