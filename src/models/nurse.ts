import { DocumentReference } from '@firebase/firestore-types';

export interface Nurse {
  $id?: string;
  name: string;
  age?: number;
  dob?: Date;
  roomRef: DocumentReference;
}
