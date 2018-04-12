import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, DateTime } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Doctor } from '../../models/doctor';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestypeModule, ModelType } from 'angular-firestype';

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

  public addDoctor(phone, email, firstName, lastName, start: DateTime, end: DateTime) {
    // this.doctorsCollection.add({ phone: phone, email: email, workoursEnd: null, workoursStart: null});
    /*this.dr.firstName = firstName;
    this.dr.lastName = lastName;
    this.dr.phone = phone;
    this.dr.email = email;
    this.dr.workHoursStart = start;
    this.dr.workHoursEnd = end;*/
    // Temporary solution, makes everything to string and no object references e.g. Person
    // const data = JSON.parse(JSON.stringify(this.dr));
    // this.doctorsCollection.add(this.dr);
    this.doctorsCollection.add({firstName: firstName, lastName: lastName, phone: phone,
                                email: email, workHoursStart: start, workHoursEnd: end});
  }
}