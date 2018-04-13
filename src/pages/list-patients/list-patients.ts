import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';

import { Patient } from '../../models/patient';
// import { PatientDoctor } from '../../models/patient-doctor';

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
  public patients: Array<Patient> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireStore: AngularFirestore) {
    const db = firebase.firestore();
    const patientRef = db.collection('patients');
    const patients = this.patients;
    patientRef.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        let data = doc.data();
        if (data.doctor != null && data.doctor._key.path.segments[6] === '8R79pi90CmrO9sYSdHUX') {
          // The patient belongs to the doctor in question.
          let patient: Patient = new Patient();
          patient.setName(data.name);
          patient.setID(doc.id);
          patient.setAge(data.age);
          patient.setDiet(data.diet);
          patient.setDoctor(data.doctor._key.path.segments[6]);
          patient.setBloodType(data.bloodType);
          patient.setArrivalTime(data.arrivalTime);
          patients.push(patient);
        }
        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(function(error) {
      console.log("Error getting documents: " + error);
    });

    //this.patients = fireStore.collection<Patient>('patients', (ref) => ref.where('doctor', '==', '/doctors/8R79pi90CmrO9sYSdHUX')).snapshotChanges().map((actions) =>
    //  actions.map((action) => ({$id: action.payload.doc.id, ...action.payload.doc.data() as Patient,
    //  })));
    //console.log(this.patients);
  }

  public openDetails(patient: Patient) {
    
  }

}
