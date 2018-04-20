import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { UpdatePatientPage } from '../update-patient/update-patient';
import { AddCommentComponent } from '../../components/add-comment/add-comment';
import { PatientProvider } from '../../providers/patient/patient';

@IonicPage()
@Component({
  selector: 'page-patient-detail',
  templateUrl: 'patient-detail.html',
})
export class PatientDetailPage {
  public patient;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public patientProvider: PatientProvider, public modalCtrl: ModalController) {

    this.patient = navParams.get('patient');
  }
  public goToUpdatePatient(patient) {
    this.navCtrl.push(UpdatePatientPage, { patient });
  }

  public addComment() {
    const commentModal = this.modalCtrl.create(AddCommentComponent, { patientId: this.patient.$id }, {});
    commentModal.present();

  }
}
