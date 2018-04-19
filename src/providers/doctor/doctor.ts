import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Doctor } from '../../models/doctor';
import { Speciality } from '../../models/speciality';
import { Room } from '../../models/room';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DoctorProvider {
  private doctorCollection: AngularFirestoreCollection<Doctor>;
  private specialityCollection: AngularFirestoreCollection<Speciality>;
  private roomCollection: AngularFirestoreCollection<Room>;
  private doctorObservable: Observable<Doctor[]>;
  private specialityObservable: Observable<Speciality[]>;
  private roomObservable: Observable<Room[]>;

  constructor(public fireStore: AngularFirestore) {
    this.doctorCollection = fireStore.collection<Doctor>('/doctors');
    this.specialityCollection = fireStore.collection<Speciality>('/specialties');
    this.roomCollection = fireStore.collection<Room>('/rooms', (ref) => ref.where('isOffice', '==', true));
    this.doctorObservable = this.doctorCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Doctor,
    })));
    this.specialityObservable = this.specialityCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Speciality,
    })));
    this.roomObservable = this.roomCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Room,
    })));
  }

  public getDoctor() {
    return this.doctorObservable;
  }

  public getRooms() {
    return this.roomObservable;
  }

  public getSpecialities() {
    return this.specialityObservable;
  }

  public addDoctor(doctor: Doctor) {
    this.doctorCollection.add(doctor);
    const alert = this.alertCtrl.create({
      title: 'Doctor created',
      subTitle: doctor.firstName + ' got added as a doctor.',
      buttons: ['OK'],
    });
    alert.present();
  }
}
