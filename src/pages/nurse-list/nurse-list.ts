import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController } from 'ionic-angular';
import { Nurse } from '../../models/nurse';
import { NurseProvider } from '../../providers/nurse/nurse';
import { Observable } from 'rxjs/Observable';
import { PopoverComponent } from '../../components/popover/popover';

@IonicPage()
@Component({
  selector: 'page-nurse-list',
  templateUrl: 'nurse-list.html',
})
export class NurseListPage {
  public nurses: Observable<Nurse[]>;

  constructor(public navCtrl: NavController, public nurseProvider: NurseProvider,
              public popoverCtrl: PopoverController) {
    this.nurses = nurseProvider.getNurses();
  }

  public addNursePrompt() {
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

    popover.onDidDismiss((popoverData) => {
      // Do something when popover closes.
    });
  }
}
