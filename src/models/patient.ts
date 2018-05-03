import { DocumentReference } from '@firebase/firestore-types';

export interface Patient {
  $id?: string;
  name: string;
  gender: string;
  bloodType: string;
  diet: string;
  dateOfBirth: Date;
  arrivalTime: Date;
  severity: number;
  allergyRef: DocumentReference;
  doctorRef: DocumentReference;
  roomRef: DocumentReference;
}
