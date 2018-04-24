import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Patient } from '../../models/patient';
import { Doctor } from '../../models/doctor';
import { Allergy } from '../../models/allergy';
import { Room } from '../../models/room';
import { Observable } from 'rxjs/Observable';
import { PatientListPage } from '../patient-list/patient-list';

@IonicPage()
@Component({
  selector: 'page-update-patient',
  templateUrl: 'update-patient.html',
})
export class UpdatePatientPage {
  public patient;
  public bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  public patientsCollection: AngularFirestoreCollection<Patient>;
  public patients: Observable<Patient[]>;

  public doctorsCollection: AngularFirestoreCollection<Doctor>;
  public doctors: Observable<Doctor[]>;

  public allergiesCollection: AngularFirestoreCollection<Allergy>;
  public allergies: Observable<Allergy[]>;

  public roomsCollection: AngularFirestoreCollection<Room>;
  public rooms: Observable<Room[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireStore: AngularFirestore,
              public alertCtrl: AlertController) {
    this.patient = navParams.get('patient');

    this.patientsCollection = fireStore.collection<Patient>('/patients');
    this.patients = this.patientsCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Patient,
    })));

    this.doctorsCollection = fireStore.collection<Doctor>('/doctors');
    this.doctors = this.doctorsCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Doctor,
    })));

    this.allergiesCollection = fireStore.collection<Allergy>('/allergies');
    this.allergies = this.allergiesCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Allergy,
    })));

    this.roomsCollection = fireStore.collection<Room>('/rooms');
    this.rooms = this.roomsCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Room,
    })));
  }

  public updatePatient(form) {
    this.updateUser(form.value);
  }

  public updateUser(patient: Patient) {
    this.patientsCollection.doc(this.patient.$id).update(patient);
    const prompt = this.alertCtrl.create({
      message: 'Patient Updated',
    });
    prompt.present();
    this.navCtrl.push(PatientListPage);
  }

  public resetForm() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

}
