import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { UpdatePatientPage } from '../update-patient/update-patient';
import { TransferPatientModal } from '../transfer-patient/transfer-patient';

@IonicPage()
@Component({
  selector: 'page-patient-detail',
  templateUrl: 'patient-detail.html',
})
export class PatientDetailPage {
  public patient;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController,
              public navParams: NavParams, public alertCtrl: AlertController) {
    this.patient = navParams.get('patient');
  }

  public goToUpdatePatient(patient) {
    this.navCtrl.push(UpdatePatientPage, { patient });
  }

  public openModalTransferPatient(patient) {
    const modal = this.modalCtrl.create(TransferPatientModal, { patient });
    modal.onDidDismiss(() => {
      this.navCtrl.pop();
    });
    modal.present();
  }
}
