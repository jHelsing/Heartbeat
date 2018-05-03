import { Component } from '@angular/core';
import { IonicPage,
         NavParams,
         ViewController,
         ToastController} from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { NurseProvider } from '../../providers/nurse/nurse';
import { RoomProvider } from '../../providers/room/room';
import { Nurse } from '../../models/nurse';
import { Room } from '../../models/room';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-add-nurse',
  templateUrl: 'add-nurse.html',
})
export class AddNursePage {
  public nurse: Nurse;
  public clonedNurse;
  public rooms: Observable<Room[]>;
  public addingNewNurse: boolean; // False is updating existing nurse.

  constructor(public navParams: NavParams,
              public toastCtrl: ToastController,
              public utl: UtilsProvider,
              public nurseProvider: NurseProvider,
              public roomProvider: RoomProvider,
              public viewCtrl: ViewController) {
    this.nurse = navParams.get('nurse');
    this.addingNewNurse = this.nurse == null;
    this.clonedNurse = Object.assign({}, this.nurse);
    if (this.addingNewNurse) {
      this.clonedNurse.roomRef = { id: undefined };
    }
    this.rooms = roomProvider.getRooms();
  }

  public addOrUpdateNurse(nurse) {
    this.clonedNurse.roomRef = this.utl.ref('rooms', nurse.roomRef);
    let msg = 'Nurse ';
    if (this.addingNewNurse) {
      this.nurseProvider.addNurse(this.clonedNurse);
      msg += 'added';
    } else {
      delete this.clonedNurse.room;
      delete this.clonedNurse.$id;
      this.nurseProvider.updateNurse(this.nurse, this.clonedNurse);
      msg += 'updated';
    }
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bot',
    });
    toast.present();
    this.closeModal();
  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }
}
