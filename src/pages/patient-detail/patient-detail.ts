import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Patient } from '../../models/patient';
import { PatientProvider } from '../../providers/patient/patient';
import { UpdatePatientPage } from '../update-patient/update-patient';
import { ViewChild } from '@angular/core';
import { Select } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-patient-detail',
  templateUrl: 'patient-detail.html',
})
export class PatientDetailPage {
  @ViewChild('select') public select: Select;
  public patient;
  public doctors;
  public newDoctor;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController,
              public navParams: NavParams, public alertCtrl: AlertController,
              public fireStore: AngularFirestore, public patientProvider: PatientProvider) {
    this.patient = navParams.get('patient');
    this.doctors = patientProvider.getDoctors();
    this.newDoctor = this.patient.did;
  }

  public goToUpdatePatient(patient) {
    this.navCtrl.push(UpdatePatientPage, { patient });
  }

  public openDoctorsList() {
    this.select.open();
  }

  public transferPatient(patient: Patient) {
    this.patientProvider.updatePatient(patient, { doctor: this.fireStore.doc('doctors/' + this.newDoctor).ref });
    const prompt = this.alertCtrl.create({
      message: 'Patient transfered',
    });
    prompt.present();
    this.navCtrl.pop();
  }
}
