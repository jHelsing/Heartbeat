import { DocumentReference } from '@firebase/firestore-types';

export interface Nurse {
  $id?: string;
  name: string;
  dateOfBirth: Date;
  roomRef: DocumentReference;
  email: string;
  imageUrl?: string;
}
