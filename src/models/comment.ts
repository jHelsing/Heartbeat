import * as firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;
import FieldValue = firebase.firestore.FieldValue;

export class Comment {
  public title: string;
  public category: string;
  public description: string;
  public patient: DocumentReference;
  // public imageUrls: string[];
  public createdAt: FieldValue;
}
