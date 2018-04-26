import { Component } from '@angular/core';
import { IonicPage, /*NavController, PopoverController, */ModalController } from 'ionic-angular';
import { Nurse } from '../../models/nurse';
import { NurseProvider } from '../../providers/nurse/nurse';
import { Observable } from 'rxjs/Observable';
/*import { PopoverComponent } from '../../components/popover/popover';*/

@IonicPage()
@Component({
  selector: 'page-nurse-list',
  templateUrl: 'nurse-list.html',
})
export class NurseListPage {
  public nurses: Observable<Nurse[]>;

  constructor(/*public navCtrl: NavController, */
              public nurseProvider: NurseProvider,
              /*public popoverCtrl: PopoverController,*/
              public modalCtrl: ModalController) {
    this.nurses = nurseProvider.getNurses();
  }

  public openModalAddUpdateNurse(nurse) {
    const addNursePage = this.modalCtrl.create('AddNursePage', nurse);
    addNursePage.present();
  }

  /*public addNursePrompt() {
    this.nurseProvider.addNursePrompt();
  }

  public updateNursePrompt(nurse: Nurse) {
    this.nurseProvider.updateNursePrompt(nurse);
  }

  public removeNurse(nurse: Nurse) {
    this.nurseProvider.removeNurse(nurse);
  }

  public presentPopover(myEvent) {
    const popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent,
    });
  }*/
}
