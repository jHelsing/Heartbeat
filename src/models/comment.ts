import * as firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;
import FieldValue = firebase.firestore.FieldValue;

export class Comment {
  title: string;
  category: string;
  description: string;
  patient: DocumentReference;
  // public imageUrls: string[];
  createdAt: FieldValue;
}
