import { DocumentReference } from '@firebase/firestore-types';

export interface Doctor {
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  password: string;
  phone: string;
  specialityRef: DocumentReference;
  roomRef: DocumentReference;
  email: string;
  workHoursStart: Date;
  workHoursEnd: Date;
}
