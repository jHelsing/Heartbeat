import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AddPatientPage } from '../add-patient/add-patient';
import { PatientDetailPage } from '../patient-detail/patient-detail';
import { PatientProvider } from '../../providers/patient/patient';
import 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-patient',
  templateUrl: 'patient-list.html',
})
export class PatientListPage {
  public patients;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
              public patientProvider: PatientProvider) {
    const specificDoctor = navParams.get('doctor');
    this.patients = patientProvider.getPatients(specificDoctor);
  }

  public goToAddPatient() {
    this.navCtrl.push(AddPatientPage);
  }

  public viewDetails(patient) {
    this.navCtrl.push(PatientDetailPage, { patient });
  }
}
