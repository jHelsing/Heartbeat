import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuxProvider } from '../aux';
import { Patient } from '../../models/patient';

@Injectable()
export class PatientProvider {

  constructor(private aux: AuxProvider) {}

  // dId is the doctor's id, when one is specified
  public getPatients(dId?) {
    let patientsLst = dId
        ? this.aux.colId$('patients', (ref) => ref.where('doctor', '==', this.aux.ref('doctors', dId)))
        : this.aux.colId$('patients');

    patientsLst = patientsLst.map((doc) => doc.map((d) => {
      // Get the observables of the referenced Room, Allergy and Doctor documents
      const roomObs = this.aux.doc$(d.roomRef.path);
      const allergyObs = this.aux.doc$(d.allergy.path);
      const doctorObs = this.aux.doc$(d.doctor.path);
      // Combine for extending the Patient object with referenced data
      const combined = Observable.combineLatest(roomObs, allergyObs, doctorObs);
      return combined.map(([roomObj, allergyObj, doctorObj]) => {
        return { ...d, roomObj, allergyObj, doctorObj };
      });
    })).flatMap((patients) => Observable.combineLatest(patients));

    return patientsLst;
  }

  public getRooms() {
    return this.aux.colId$('rooms');
  }

  public getAllergies() {
    return this.aux.colId$('allergies');
  }

  public getDoctors() {
    return this.aux.colId$('doctors');
  }

  public addPatient(patient: Patient) {
    this.aux.col('patients').add(patient);
  }

  public updatePatient(patient: Patient, data) {
    this.aux.col('patients').doc(patient.$id).update(data);
  }

  public removePatient(patient: Patient) {
    this.aux.col('patients').doc(patient.$id).delete();
  }
}
