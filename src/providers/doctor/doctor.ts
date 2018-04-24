import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AlertController } from 'ionic-angular';
import { Doctor } from '../../models/doctor';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DoctorProvider {
  private doctorCollection: AngularFirestoreCollection<Doctor>;
  private doctorObservable: Observable<Doctor[]>;

  constructor(public fireStore: AngularFirestore, public alertCtrl: AlertController) {
    this.doctorCollection = fireStore.collection<Doctor>('/doctors');
    this.doctorObservable = this.doctorCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Doctor,
    })));
  }

  public getDoctors() {
    return this.doctorObservable;
  }

  public addDoctor(doctor) {
    doctor.roomRef = this.fireStore.doc('rooms/' + doctor.room).ref;
    doctor.specialityRef = this.fireStore.doc('specialties/' + doctor.speciality).ref;
    delete doctor.room;
    delete doctor.speciality;
    this.doctorCollection.add(doctor);
    const alert = this.alertCtrl.create({
      title: 'Doctor created',
      subTitle: doctor.firstName + ' got added as a doctor.',
      buttons: ['OK'],
    });
    alert.present();
  }
}
