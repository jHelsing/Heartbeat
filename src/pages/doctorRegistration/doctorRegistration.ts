import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, DateTime } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Doctor } from '../../models/doctor';
import { Speciality } from '../../models/specialities';
import { Observable } from 'rxjs/Rx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentReference } from '@firebase/firestore-types';

@Component({
  selector: 'page-doctor',
  templateUrl: 'doctorRegistration.html',
})

export class DoctorRegistration {
  private doctorsCollection: AngularFirestoreCollection<Doctor>;
  private specialitiesCollection: AngularFirestoreCollection<Speciality>;
  private doctors: Observable<Doctor[]>;
  private dr: Doctor = new Doctor();
  private specialities: Observable<Speciality[]>;

  private event = {
    month: '2018-01-01',
    timeStarts: '08:00',
    timeEnds: '17:00',
  };

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public fireStore: AngularFirestore) {
    this.doctorsCollection = fireStore.collection<Doctor>('/doctors');
    this.specialitiesCollection = fireStore.collection<Speciality>('/specialties');
    this.doctors = this.doctorsCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Doctor,
    })));
    this.specialities = this.specialitiesCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Speciality,
    })));

  }

  public addDoctor(firstName, lastName, gender, age, speciality, email, password, start: DateTime, end: DateTime, phone) {

    this.doctorsCollection.add({ firstName: firstName, lastName: lastName, gender: gender, age: age, speciality: speciality, email: email,
      password, workHoursStart: start, workHoursEnd: end, phone });
    const alert = this.alertCtrl.create({
      title: 'Doctor created',
      subTitle: firstName + ' got added as a doctor.',
      buttons: ['OK'],
    });
    alert.present();
  }

  public goBack() {
    this.navCtrl.pop();
  }
}
