import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ToastController } from 'ionic-angular';
import { Doctor } from '../../models/doctor';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Room } from '../../models/room';
import { Speciality } from '../../models/speciality';

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
       const specialityObservable = fireStore.doc(data.specialityRef.path).snapshotChanges()
         .map((action) => action.payload.data() as Speciality);
       const combined = Observable.combineLatest(roomObservable, specialityObservable);

       return combined.map(([roomObj, specialityObj]) => {
         return { ...data, $id, room: roomObj.name, speciality: specialityObj.name };
       });
     })).flatMap((doctors) => Observable.combineLatest(doctors));
  }

  public getDoctors() {
    return this.doctorObservable;
  }

  public addDoctor(doctor) {
    this.doctorCollection.add(doctor);
  }

  public removeDoctor(doctor: Doctor) {
    this.doctorCollection.doc(doctor.$id).delete();
  }

  public updateDoctor(doctor: Doctor, data) {
    this.doctorCollection.doc(doctor.$id).update(data);
  }
}
