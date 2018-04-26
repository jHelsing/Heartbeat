import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ToastController } from 'ionic-angular';
import { Doctor } from '../../models/doctor';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Room } from '../../models/room';

@Injectable()
export class DoctorProvider {
  private doctorCollection: AngularFirestoreCollection<Doctor>;
  private doctorObservable: Observable<Doctor[]>;

  constructor(public fireStore: AngularFirestore, public toastCtrl: ToastController) {
    this.doctorCollection = fireStore.collection<Doctor>('/doctors');
    this.doctorObservable = this.doctorCollection.snapshotChanges().map((actions) => actions.map((doctorAction) => {
       const data = doctorAction.payload.doc.data() as Doctor;
       const $id = doctorAction.payload.doc.id;

       const roomObservable = fireStore.doc(data.roomRef.path).snapshotChanges()
         .map((action) => action.payload.data() as Room);

       return roomObservable.map((room) => ({ ...data, $id, room: room.name }));
     })).flatMap((doctorObservable) => Observable.combineLatest(doctorObservable));
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
    const alert = this.toastCtrl.create({
      message: 'Doctor created',
      duration: 3000,
      position: 'bot',
    });
    alert.present();
  }

  public removeDoctor(doctor: Doctor) {
    this.doctorCollection.doc(doctor.$id).delete();
  }

  public updateDoctor(doctor: Doctor, data) {
    this.doctorCollection.doc(doctor.$id).update(data);
  }
}
