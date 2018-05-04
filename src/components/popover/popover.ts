import { Component } from '@angular/core';
import { ViewController, NavController, App } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { LoginProvider } from '../../providers/login/login';
import { UtilsProvider } from '../../providers/utils/utils';
import { Storage } from '@ionic/storage';
import { Doctor } from '../../models/doctor';
import { Nurse } from '../../models/nurse';
import { Administrator } from '../../models/administrator';

@Component({
  selector: 'popover',
  templateUrl: 'popover.html',
})
export class PopoverComponent {

  public items: any;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController,
              public loginProvider: LoginProvider, public app: App,
              storage: Storage, private utl: UtilsProvider) {

    this.items = [
      { title: '[User Name]' },
      { title: 'Logout' },
    ];
    storage.get('user').then((data) => {
      this.addUserName(data);
    });
  }

  public itemClick(item: any) {
    if (item.title === 'Logout') {
      this.viewCtrl.dismiss(item);
      this.loginProvider.logout();
      this.app.getRootNav().setRoot(LoginPage);
    }
  }

  private addUserName(user) {
    switch (user.role) {
    case 'administrators':
      this.utl.col('administrators').doc<Administrator>(user.id).valueChanges().subscribe((data) => {
        this.items[0].title = data.name;
      });
      break;
    case 'doctors':
      this.utl.col('doctors').doc<Doctor>(user.id).valueChanges().subscribe((data) => {
        this.items[0].title = data.firstName + ' ' + data.lastName;
      });
      break;
    case 'nurses':
      this.utl.col('nurses').doc<Nurse>(user.id).valueChanges().subscribe((data) => {
        this.items[0].title = data.name;
      });
      break;
    }
  }
}
