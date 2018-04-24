import { Component } from '@angular/core';
import { IonicPage,
         NavParams,
         NavController,
         ModalController } from 'ionic-angular';
import { PatientProvider } from '../../providers/patient/patient';
import { PatientDetailPage } from '../patient-detail/patient-detail';

@IonicPage()
@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html',
})
export class PatientPage {
  public patients;

  constructor(public navParams: NavParams,
              public navCtrl: NavController,
              public modalCtrl: ModalController,
              public patientProvider: PatientProvider) {
    const specificDoctor = navParams.get('doctor');
    this.patients = patientProvider.getPatients(specificDoctor);
  }

  public openModalAddPatient() {
    const addPatientPage = this.modalCtrl.create('AddPatientPage');
    addPatientPage.present();
  }

  public viewDetails(patient) {
    this.navCtrl.push(PatientDetailPage, { patient });
  }
}
