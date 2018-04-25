import { Component } from '@angular/core';
import { ViewController, NavController, App} from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { LoginProvider } from '../../providers/login/login';


/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html',
})
export class PopoverComponent {

  public items: any;
  public text: string;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController,
              public loginProvider: LoginProvider, public app: App) {
    this.items = [
      { item: 'Log Out' },
    ];
  }

  public itemClick(item: any) {
    if (item.item === 'Log Out') {
      this.viewCtrl.dismiss(item);
      this.loginProvider.logout();
      this.app.getRootNav().setRoot(LoginPage);
    }
  }
}
