import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

// import { Patient } from '../../models/patient';
import { PatientDoctor } from '../../models/patient-doctor';

// import { PatientDetailsPage } from '../patient-details/patient-details';
/**
 * Generated class for the ListPatientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-patients',
  templateUrl: 'list-patients.html',
})
export class ListPatientsPage {
  private patientDoctorCollection: AngularFirestoreCollection<PatientDoctor>;
  private patientCollection: AngularFirestoreCollection<Patient>;
  private patients: QueryDocumentSnapshot[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireStore: AngularFirestore) {
    // Get patients from doctor in navParams.get("doctor")
    this.patientDoctorCollection = fireStore.collection<PatientDoctor>('/patientDoctors');
    this.patientCollection = fireStore.collection<Patient>();
    this.patientDoctorCollection.where('doctor', '==', 'a1XamXMzTqmLpfWZQpoO');
    const pDQuerySnapshot = this.patientDoctorCollection.get();
    pDQuerySnapshot.forEach(addPatient, this);
  }

  public addPatient(patientDoctor: QueryDocumentSnapshot) {
    const data = patientDoctor.data();
    const snapshotArr = this.patientCollection.docs();
    let i;
    for (i = 0; i < snapshotArr.size(); i++) {
      const docs = snapshotArr[i];
      const patientID = docs.get('id');
      const patientDoctorID = data.get('id');
      if (patientID === patientDoctorID) {
        this.patients.add(docs);
        return;
      }
    }
  }
}
