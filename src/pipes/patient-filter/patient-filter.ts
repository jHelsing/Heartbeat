import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from '../../models/patient';

/**
 * Generated class for the PatientFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'patientFilter',
})
export class PatientFilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  public transform(patients: Patient[]) {
    if (!patients) {
      return patients;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return patients.filter((patient) => patient.hasOwnProperty('age'));
  }
}
