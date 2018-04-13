import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Nurse } from '../../models/nurse';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { AlertController } from 'ionic-angular';
import { DocumentReference } from '@firebase/firestore-types';

@Injectable()
export class NurseProvider {
  private nursesCollection: AngularFirestoreCollection<Nurse>;
  private nurses: Observable<Nurse[]>;
  private exampleRoomRef: DocumentReference;

  constructor(public fireStore: AngularFirestore, public alertCtrl: AlertController) {
    this.exampleRoomRef = fireStore.doc('rooms/exampleRoom').ref; // Temporary example reference
    this.nursesCollection = fireStore.collection<Nurse>('/nurses');

    this.nurses = this.nursesCollection.snapshotChanges().map((actions) => actions.map((nurseAction) => {
      const data = nurseAction.payload.doc.data() as Nurse;
      const $id = nurseAction.payload.doc.id;

      // Get the observable of the referenced Room document
      const roomObservable = fireStore.doc(data.roomRef.path).snapshotChanges()
        .map((action) => action.payload.data());

      // Extend the Nurse object with the ID and referenced Room data
      return roomObservable.map((room) => ({ ...data, $id, room: room.name }));
    })).flatMap((nurses) => Observable.combineLatest(nurses));
  }

  public getNurses() {
    return this.nurses;
  }

  // @TODO Replace static example roomRef with dynamically chosen value
  public addNurse(nurse: Nurse) {
    this.nursesCollection.add(nurse);
  }

  public updateNurse(nurse: Nurse, data) {
    this.nursesCollection.doc(nurse.$id).update(data);
  }

  public removeNurse(nurse: Nurse) {
    this.nursesCollection.doc(nurse.$id).delete();
  }

  public addNursePrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Nurse',
      message: 'Add a new nurse.',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
        },
        {
          name: 'age',
          placeholder: 'Age',
          type: 'number',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Add',
          handler: ({ name, age }) => this.addNurse({ name, age: +age, roomRef: this.exampleRoomRef }),
        },
      ],
    });
    prompt.present();
  }

  public updateNursePrompt(nurse: Nurse) {
    const prompt = this.alertCtrl.create({
      title: 'Update Nurse',
      message: 'Update nurse data.',
      inputs: [
        {
          name: 'name',
          placeholder: nurse.name,
        },
        {
          name: 'age',
          placeholder: String(nurse.age),
          type: 'number',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Update',
          handler: ({ name, age }) => this.updateNurse(nurse, {
            name: name || nurse.name,
            age: +age || nurse.age,
          }),
        },
      ],
    });
    prompt.present();
  }

}
