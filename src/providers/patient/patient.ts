import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Patient } from '../../models/patient';
import { Allergy } from '../../models/allergy';
import { Doctor } from '../../models/doctor';
import { Room } from '../../models/room';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PatientProvider {

  public patientsCollection: AngularFirestoreCollection<Patient>;
  public patients: Observable<Patient[]>;
  public doctorsCollection: AngularFirestoreCollection<Doctor>;
  public doctors: Observable<Doctor[]>;
  public allergiesCollection: AngularFirestoreCollection<Allergy>;
  public allergies: Observable<Allergy[]>;
  public roomsCollection: AngularFirestoreCollection<Room>;
  public rooms: Observable<Room[]>;

  constructor(public fireStore: AngularFirestore) {
    this.patientsCollection = fireStore.collection<Patient>('/patients');
    this.patients = this.patientsCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Patient,
    })));

    this.doctorsCollection = this.fireStore.collection<Doctor>('/doctors');
    this.doctors = this.doctorsCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Doctor,
    })));

    this.allergiesCollection = this.fireStore.collection<Allergy>('/allergies');
    this.allergies = this.allergiesCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Allergy,
    })));

    this.roomsCollection = this.fireStore.collection<Room>('/rooms');
    this.rooms = this.roomsCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Room,
    })));
  }

  public getRooms() {
    return this.rooms;
  }

  public getDoctors() {
    return this.fireStore.collection('/doctors/').snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as Doctor;
        const $id = a.payload.doc.id;
        return { $id, ...data };
      });
    });
  }

  public getAllergies() {
    return this.allergies;
  }

  public findDoctor(did) {
    return this.fireStore.doc('doctors/' + did).ref;
  }

  public getPatients(specifiedDoctor) {
    let collection = this.patientsCollection;

    if (specifiedDoctor) {
      const doctorRef = this.fireStore.doc('doctors/' + specifiedDoctor).ref;
      collection = this.fireStore.collection<Patient>('/patients', (ref) => ref.where('doctor', '==', doctorRef));
    }

    this.patients = collection.snapshotChanges().map((actions) => actions.map((patientAction) => {
      const data = patientAction.payload.doc.data() as Patient;
      const $id = patientAction.payload.doc.id;
      const did = data.doctor.id;

      // Get the observable of the referenced Room document
      const roomObservable = this.fireStore.doc(data.roomRef.path).snapshotChanges()
        .map((action) => action.payload.data());

      const doctorObservable = this.fireStore.doc(data.doctor.path).snapshotChanges()
        .map((action) => action.payload.data());

      const allergyObservable = this.fireStore.doc(data.allergy.path).snapshotChanges()
        .map((action) => action.payload.data());

      const combined = Observable.combineLatest(roomObservable, doctorObservable, allergyObservable);

      // Extend the object with the ID and referenced Room data
      return combined.map(([room, doctor, allergies]) => {
        return { ...data,
                 $id,
                 did,  // Doctor's ID
                 room: room.name,
                 doctorName: (doctor.firstName + ' ' + doctor.lastName),
                 allergyName: allergies.name };
      });
    })).flatMap((patients) => Observable.combineLatest(patients));

    return this.patients;
  }

  public updatePatient(patient: Patient, data) {
    this.patientsCollection.doc(patient.$id).update(data);
  }

  public newPatient(patient: Patient) {
    patient.doctor = this.fireStore.doc('doctors/' + patient.doctor).ref;
    patient.roomRef = this.fireStore.doc('rooms/' + patient.roomRef).ref;
    patient.allergy = this.fireStore.doc('allergies/' + patient.allergy).ref;
    this.patientsCollection.add(patient);
  }

  public removePatient(patient: Patient) {
    this.patientsCollection.doc(patient.$id).delete();
  }
}
