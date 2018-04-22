import { DocumentReference } from '@firebase/firestore-types';

export class Patient {
  public $id?: string;
  public name: string;
  public age: number;
  public gender: string;
  public bloodType?: string;
  public arrivalTime?: Date;
  public allergy?: DocumentReference;
  public diet?: string;
  public doctor?: DocumentReference;
  public treatments?: string;
  public roomRef?: DocumentReference;

  constructor() {
    this.$id = '';
  }
}
