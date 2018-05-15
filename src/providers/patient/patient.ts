import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UtilsProvider } from '../utils/utils';
import { Patient } from '../../models/patient';

@Injectable()
export class PatientProvider {

  constructor(private utl: UtilsProvider) {}

  // dId is the doctor's id, when one is specified
  public getPatients(doctorId?) {
    let patientsLst = doctorId
        ? this.utl.colId$('patients', (ref) => ref.where('doctorRef', '==', this.utl.ref('doctors', doctorId)))
        : this.utl.colId$('patients');

    patientsLst = patientsLst.map((patientDoc) => patientDoc.map((patient) => {
      // Get the observables of the referenced Room, Allergy and Doctor documents
      const roomObs = this.utl.doc$(patient.roomRef.path);
      const allergyObs = this.utl.doc$(patient.allergyRef.path);
      const doctorObs = this.utl.doc$(patient.doctorRef.path);
      // Combine for extending the Patient object with referenced data
      const combined = Observable.combineLatest(roomObs, allergyObs, doctorObs);
      return combined.map(([roomObj, allergyObj, doctorObj]) => {
        return { ...patient, roomObj, allergyObj, doctorObj };
      });
    })).flatMap((patients) => Observable.combineLatest(patients));

    return patientsLst;
  }

  public getPatientsInRoom(roomId?) {
    let patientsLst = roomId
        ? this.utl.colId$('patients', (ref) => ref.where('roomRef', '==', this.utl.ref('rooms', roomId)))
        : this.utl.colId$('patients');

    patientsLst = patientsLst.map((patientDoc) => patientDoc.map((patient) => {
      // Get the observables of the referenced Room, Allergy and Doctor documents
      const roomObs = this.utl.doc$(patient.roomRef.path);
      const allergyObs = this.utl.doc$(patient.allergyRef.path);
      const doctorObs = this.utl.doc$(patient.doctorRef.path);
      // Combine for extending the Patient object with referenced data
      const combined = Observable.combineLatest(roomObs, allergyObs, doctorObs);
      return combined.map(([roomObj, allergyObj, doctorObj]) => {
        return { ...patient, roomObj, allergyObj, doctorObj };
      });
    })).flatMap((patients) => Observable.combineLatest(patients));

    return patientsLst;
  }

  public getRooms() {
    return this.utl.colId$('rooms');
  }

  public getAllergies() {
    return this.utl.colId$('allergies');
  }

  public getDoctors() {
    return this.utl.colId$('doctors');
  }

  public addPatient(patient: Patient) {
    this.utl.col('patients').add(patient);
  }

  public updatePatient(patient: Patient, data) {
    this.utl.col('patients').doc(patient.$id).update(data);
  }

  public updatePatientById(patientId, data) {
    this.utl.col('patients').doc(patientId).update(data);
  }

  public removePatient(patient: Patient) {
    this.utl.col('patients').doc(patient.$id).delete();
  }
}
