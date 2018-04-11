import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Doctor } from '../../models/doctor';
import { Observable } from 'rxjs/Observable';

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
  }