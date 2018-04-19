import { DocumentReference } from '@firebase/firestore-types';

export interface Doctor {
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  password: string;
  phone: string;
  speciality: DocumentReference;
  room: DocumentReference;
  email: string;
  workHoursStart: Date;
  workHoursEnd: Date;
}
