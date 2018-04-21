import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Patient } from '../../models/patient';
import { PatientProvider } from '../../providers/patient/patient';

@IonicPage()
@Component({
  selector: 'transfer-patient',
  templateUrl: 'transfer-patient.html',
})

export class TransferPatientModal {
  public patient;
  public doctors;
  public newDoctor;

  constructor(public viewCtrl: ViewController, public navParams: NavParams,
              public fireStore: AngularFirestore, public patientProvider: PatientProvider) {
    this.patient = navParams.get('patient');
    this.doctors = patientProvider.getDoctors();
  }

  public transferPatient(patient: Patient) {
    this.patientProvider.updatePatient(patient, { doctor: this.fireStore.doc('doctors/' + this.newDoctor).ref });
    this.viewCtrl.dismiss();
  }
}
