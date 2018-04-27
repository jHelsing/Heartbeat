import { DocumentReference } from '@firebase/firestore-types';

export interface Patient {
  $id?: string;
  name: string;
  dateOfBirth: Date;
  gender: string;
  bloodType: string;
  arrivalTime: Date;
  allergy: DocumentReference;
  diet: string;
  doctor: DocumentReference;
  treatments: string;
  roomRef: DocumentReference;
}
