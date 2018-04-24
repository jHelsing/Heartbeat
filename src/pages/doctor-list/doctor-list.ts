import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { LoginProvider } from '../../providers/login/login';
import { PopoverComponent } from '../../components/popover/popover';

@IonicPage()
@Component({
  selector: 'page-doctor-list',
  templateUrl: 'doctor-list.html',
})
export class DoctorListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public popoverCtrl: PopoverController, public loginProvider: LoginProvider) {}

  public presentPopover(myEvent) {
    const popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent,
    });

    popover.onDidDismiss((popoverData) => {
      this.loginProvider.logout();
      this.navCtrl.setRoot(LoginPage);
    });
  }
}
