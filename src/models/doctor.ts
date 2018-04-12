import { DateTime } from 'ionic-angular';

// import { Person } from '../models/person';
export class Doctor {
  firstName: string;
  lastName: string;
  //age: number;
  phone: string;
    // speciality: reference Role
    // office: reference Room
  email: string;
  workHoursStart: DateTime;
  workHoursEnd: DateTime;
  constructor() {}
}

