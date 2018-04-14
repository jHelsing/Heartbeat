import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Patient } from '../../models/patient';
import { Observable } from 'rxjs/Observable';
import { AddPatientPage } from '../add-patient/add-patient';
import { UpdatePatientPage } from '../update-patient/update-patient';
import { PatientDetailPage } from '../patient-detail/patient-detail';
import 'rxjs/Rx';
/**
 * Generated class for the PatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html',
})
export class PatientPage {

  public patientsCollection: AngularFirestoreCollection<Patient>;
  public patients: Observable<Patient[]>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public fireStore: AngularFirestore) {
    this.patientsCollection = fireStore.collection<Patient>('/patients');
    this.patients = this.patientsCollection.snapshotChanges().map((actions) => actions.map((patientAction) => {
      const data = patientAction.payload.doc.data() as Patient;
      const $id = patientAction.payload.doc.id;

      // Get the observable of the referenced Room document
      const roomObservable = fireStore.doc(data.roomRef.path).snapshotChanges()
        .map((action) => action.payload.data());

      const doctorObservable = fireStore.doc(data.doctor.path).snapshotChanges()
          .map((action) => action.payload.data());

      const allergyObservable = fireStore.doc(data.allergy.path).snapshotChanges()
          .map((action) => action.payload.data());

      const combined = Observable.combineLatest(roomObservable, doctorObservable, allergyObservable);

      // Extend the Nurse object with the ID and referenced Room data
      return combined.map(([room, doctor, allergy]) => ({ ...data, $id, room: room.name, doctor: doctor.firstName,
      allergy: allergy.name }));
    })).flatMap((patients) => Observable.combineLatest(patients));

  }

  public ionViewDidLoad() {
    // console.log('ionViewDidLoad PatientPage');
  }

  public updateUser(patient: Patient, data) {
    // console.log('Update', { patient, data });
    this.patientsCollection.doc(patient.$id).update(data);
  }

  public removeUser(patient: Patient) {
    // console.log('Remove', patient);
    this.patientsCollection.doc(patient.$id).delete();
  }

  public goToAddPatient() {
    this.navCtrl.push(AddPatientPage);
  }

  public viewDetails(patient) {
    this.navCtrl.push(PatientDetailPage, { patient });
  }

}
