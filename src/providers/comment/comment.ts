import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Comment } from '../../models/comment';
import { Observable } from 'rxjs/Observable';
import {Patient} from '../../models/patient';
import {DateTime} from 'ionic-angular';
import * as firebase from 'firebase';

@Injectable()
export class CommentProvider {
  private commentsCollection: AngularFirestoreCollection<Comment>;
  private comments: Observable<Comment[]>;

  constructor(private fireStore: AngularFirestore) {
    this.commentsCollection = fireStore.collection<Comment>('/comments');
    this.comments = this.commentsCollection.snapshotChanges().map((actions) => actions.map((commentAction) => {
      const data = commentAction.payload.doc.data() as Comment;
      const $id = commentAction.payload.doc.id;

      const patientObservable = fireStore.doc(data.patient.path).snapshotChanges()
        .map((action) => action.payload.data());
      return patientObservable.map((patient) => ({ ...data, $id, patient: patient.name } as Comment));
    })).flatMap((comments) => Observable.combineLatest(comments));
  }

  public uploadComment(comment: Comment, patientId: string) {
    comment.patient = this.fireStore.doc('patient/' + patientId).ref;
    this.commentsCollection.add({ title: comment.title, category: comment.title, description: comment.description,
      patient: comment.patient, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
  }
}
