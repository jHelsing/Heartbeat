import { DateTime } from 'ionic-angular';
import { Speciality } from '../models/specialities';
import { DocumentReference } from '@firebase/firestore-types';

// import { Person } from '../models/person';
export class Doctor {
  public firstName: string;
  public lastName: string;
  public gender: string;
  public age: number;
  public password: string;
  public phone: string;
  public speciality: DocumentReference;
    // office: reference Room
  public email: string;
  public workHoursStart: DateTime;
  public workHoursEnd: DateTime;
}
