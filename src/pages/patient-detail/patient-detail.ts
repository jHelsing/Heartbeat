import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Patient } from '../../models/patient';
import { UpdatePatientPage } from '../update-patient/update-patient';
import { PatientProvider } from '../../providers/patient/patient';

@IonicPage()
@Component({
  selector: 'page-patient-detail',
  templateUrl: 'patient-detail.html',
})
export class PatientDetailPage {
  public patient;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
              public patientProvider: PatientProvider) {
    this.patient = navParams.get('patient');
  }
  public goToUpdatePatient(patient) {
    this.navCtrl.push(UpdatePatientPage, { patient });
  }
}
