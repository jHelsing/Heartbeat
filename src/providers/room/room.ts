import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { UtilsProvider } from '../utils/utils';
/*import { Room } from '../../models/room';
import { Observable } from 'rxjs/Rx';*/

@Injectable()
export class RoomProvider {
  /*private roomObservable: Observable<Room[]>;
  private roomCollection: AngularFirestoreCollection<Room>;*/

  constructor(private utl: UtilsProvider) {
    /*this.roomCollection = fireStore.collection<Room>('/rooms', (ref) => ref.where('isOffice', '==', true));
    this.roomObservable = this.roomCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Room,
    })));*/
  }

  public getRooms() {
    return this.utl.colId$('rooms', (ref) => ref.where('isOffice', '==', true));
    // return this.roomObservable;
  }
}
