import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Patient } from '../../models/patient';
import { Doctor } from '../../models/doctor';
import { Allergy } from '../../models/allergy';
import { Room } from '../../models/room';
import { Observable } from 'rxjs/Observable';
import { PatientPage } from '../patient/patient';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-patient',
  templateUrl: 'add-patient.html',
})
export class AddPatientPage {
  public newPatient = { };
  public bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  public patientsCollection: AngularFirestoreCollection<Patient>;
  public patients: Observable<Patient[]>;

  public doctorsCollection: AngularFirestoreCollection<Doctor>;
  public doctors: Observable<Doctor[]>;

  public allergiesCollection: AngularFirestoreCollection<Allergy>;
  public allergies: Observable<Allergy[]>;

  public roomsCollection: AngularFirestoreCollection<Room>;
  public rooms: Observable<Room[]>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public fireStore: AngularFirestore) {
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

  public addPatient(patient: Patient) {
    patient.doctor = this.fireStore.doc('doctors/' + patient.doctor).ref;
    patient.roomRef = this.fireStore.doc('rooms/' + patient.roomRef).ref;
    patient.allergy = this.fireStore.doc('allergies/' + patient.allergy).ref;
    this.patientsCollection.add(patient);
    const prompt = this.alertCtrl.create({
      message: 'Patient added',
    });
    prompt.present();
    this.navCtrl.push(PatientPage);
  }

  public resetPatient() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

}
