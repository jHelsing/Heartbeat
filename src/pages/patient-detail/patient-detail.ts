import { Component,
         ViewChild } from '@angular/core';
import { IonicPage,
         NavController,
         NavParams,
         AlertController,
         ModalController,
         Select } from 'ionic-angular';
import { PatientProvider } from '../../providers/patient/patient';
import { AuxProvider } from '../../providers/aux';
import { Patient } from '../../models/patient';

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              public patientProvider: PatientProvider,
              public aux: AuxProvider) {
    this.patient = navParams.get('patient');
    this.doctors = patientProvider.getDoctors();
    this.newDoctor = this.patient.doctor.id;
  }

  public openModalUpdatePatient() {
    const data = { patient : this.patient };
    const addPatientPage = this.modalCtrl.create('AddPatientPage', data);
    addPatientPage.present();
    this.navCtrl.pop();
  }

  public openDoctorsList() {
    this.select.open();
  }

  public transferPatient(patient: Patient) {
    this.patientProvider.updatePatient(patient, { doctor: this.aux.ref('doctors', this.newDoctor) });
    const prompt = this.alertCtrl.create({
      message: 'Patient transfered',
    });
    prompt.present();
    this.navCtrl.pop();
  }
}
