import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Patient } from '../../models/patient';
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
  private patients: Observable<Patient[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireStore: AngularFirestore) {
    this.patients = fireStore.collection<Patient>('/patients').snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Patient,
    })));
    let patientsOfDoctor = fireStore.collection<PatientDoctor>('/patientDoctors', (ref) => ref.where('doctor', '==', 'a1XamXMzTqmLpfWZQpoO')).snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as PatientDoctor,
    })));
    console.log(this.patients);

    // Get patients from doctor in navParams.get("doctor")
    // let patientDoctorCollection = fireStore.collection<PatientDoctor>('/patientDoctors',
    //  (ref) => ref.where('doctor', '==', 'a1XamXMzTqmLpfWZQpoO')).snapshotChanges().map((actions) => actions.map((action) => ({
    //    $id: action.payload.doc.id, ...action.payload.doc.data() as PatientDoctor, })));
    // this.patients = fireStore.collection<Patient>('/patients').snapshotChanges().map((actions) => actions.map((action) => ({
    //  $id: action.payload.doc.id, ...action.payload.doc.data() as Patient, })));
    // patientCollection.forEach(doc => console.log(doc));
    // this.patients = patientCollection;
    // patientDoctorCollection.forEach(doc => {

    // });

    // console.log(patientDoctorCollection);
    // let patientDoctors = patientDoctorCollection.snapshotChanges().map((action) => action.payload.data());
    // patientDoctors.forEach(doc => console.log(doc));
    // const unfiltered = patientCollection.snapshotChanges();
    // console.log(patientDoctors);
    // let i: Integer;
    // for (i = 0; i < patientDoctors.size; i++) {
    //  console.log(unfiltered);
    //  let newPatient = unfiltered.get();
    // }
  }

}
