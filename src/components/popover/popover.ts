import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
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

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public loginProvider: LoginProvider) {
    this.items = [
      { item: 'Page 1' },
      { item: 'Log Out' },
    ];
  }

  public itemClick(item: any) {
    this.viewCtrl.dismiss(item);

  }

}
