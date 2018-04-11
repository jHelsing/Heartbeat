import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
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

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public fireStore: AngularFirestore) {
        this.doctorsCollection = fireStore.collection<Doctor>('/doctors');
        this.doctors = this.doctorsCollection.snapshotChanges().map((actions) => actions.map((action) => ({
          $id: action.payload.doc.id, ...action.payload.doc.data() as Doctor,
        })));
      }
  
    public addDoctor(phone: string, email: string){
        this.doctorsCollection.add({ phone: phone, email: email, workoursEnd: null, workoursStart: null});
    } 

    public event = {
        month: "2018-01-01",
        timeStarts: "08:08",
        timeEnds: "1990-02-23"
    }
  }