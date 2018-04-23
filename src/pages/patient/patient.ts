import { Component } from '@angular/core';
import { IonicPage,
         NavController,
         NavParams } from 'ionic-angular';
import { PatientProvider } from '../../providers/patient/patient';
import { AddPatientPage } from '../add-patient/add-patient';
import { PatientDetailPage } from '../patient-detail/patient-detail';
import 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html',
})
export class PatientPage {
  public patients;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
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
