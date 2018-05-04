import { DocumentReference } from '@firebase/firestore-types';

export interface Doctor {
  $id?: string;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: Date;
  password: string;
  phone: string;
  specialityRef: DocumentReference;
  roomRef: DocumentReference;
  email: string;
  workHoursStart: Date;
  workHoursEnd: Date;
  imageUrl?: string;
}
