import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UtilsProvider } from '../utils/utils';
import { Patient } from '../../models/patient';

@Injectable()
export class PatientProvider {

  constructor(private utl: UtilsProvider) {}

  // dId is the doctor's id, when one is specified
  public getPatients(dId?) {
    let patientsLst = dId
        ? this.utl.colId$('patients', (ref) => ref.where('doctor', '==', this.utl.ref('doctors', dId)))
        : this.utl.colId$('patients');

    patientsLst = patientsLst.map((doc) => doc.map((d) => {
      // Get the observables of the referenced Room, Allergy and Doctor documents
      const roomObs = this.utl.doc$(d.roomRef.path);
      const allergyObs = this.utl.doc$(d.allergy.path);
      const doctorObs = this.utl.doc$(d.doctor.path);
      // Combine for extending the Patient object with referenced data
      const combined = Observable.combineLatest(roomObs, allergyObs, doctorObs);
      return combined.map(([roomObj, allergyObj, doctorObj]) => {
        return { ...d, roomObj, allergyObj, doctorObj };
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

  public removePatient(patient: Patient) {
    this.utl.col('patients').doc(patient.$id).delete();
  }
}
