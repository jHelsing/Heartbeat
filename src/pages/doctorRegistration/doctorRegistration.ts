import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, DateTime } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Doctor } from '../../models/doctor';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-doctor',
  templateUrl: 'doctorRegistration.html',
})

export class DoctorRegistration{
  public doctorsCollection: AngularFirestoreCollection<Doctor>;
  public doctors: Observable<Doctor[]>;
  public dr: Doctor = new Doctor();
  public event = {
    month: "2018-01-01",
    timeStarts: "08:00",
    timeEnds: "17:00"
  }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public fireStore: AngularFirestore) {
    this.doctorsCollection = fireStore.collection<Doctor>('/doctors');
    this.doctors = this.doctorsCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Doctor,
    })));
  }

  public addDoctor(phone, email, firstName, lastName, age, gender, start: DateTime, end: DateTime) {
    
    this.doctorsCollection.add({firstName: firstName, lastName: lastName, phone: phone, gender:gender, age: age,
                                email: email, workHoursStart: start, workHoursEnd: end});
  }
}