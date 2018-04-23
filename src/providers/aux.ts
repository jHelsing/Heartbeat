import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { DocumentReference } from '@firebase/firestore-types';

type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
type DocPredicate<T> = string | AngularFirestoreDocument<T>;

@Injectable()
export class AuxProvider {

  constructor(private afs: AngularFirestore) {}

  // Return a reference to a collection from a path or reference
  public doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
    return typeof ref === 'string' ? this.afs.doc<T>(ref) : ref;
  }

  // Return a reference to a document from a path or reference
  public col<T>(ref: CollectionPredicate<T>, queryFn?): AngularFirestoreCollection<T> {
    return typeof ref === 'string' ? this.afs.collection<T>(ref, queryFn) : ref;
  }

  // Return a document from a path or a reference
  public doc$<T>(ref: DocPredicate<T>): Observable<T> {
    return this.doc(ref).snapshotChanges().map((doc) => {
      return doc.payload.data() as T;
    });
  }

  // Return a collection from a path or a reference
  public col$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<T[]> {
    return this.col(ref, queryFn).snapshotChanges().map((doc) => {
      return doc.map((d) => d.payload.doc.data()) as T[];
    });
  }

  // Return an extended collection (includes $id) from a path or a reference
  public colId$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<any[]> {
    return this.col(ref, queryFn).snapshotChanges().map((doc) => {
      return doc.map((d) => {
        const data = d.payload.doc.data();
        const $id = d.payload.doc.id;
        return { $id, ...data };
      });
    });
  }

  // Return a reference from two strings refering collection and document
  public ref(col: string, doc: string): DocumentReference {
    return this.doc(col + '/' + doc).ref;
  }
}
