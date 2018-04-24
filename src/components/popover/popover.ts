import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

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

  constructor(public viewCtrl: ViewController) {
    this.items = [
      { item: 'Page 1' },
      { item: 'Log Out' },
    ];
  }

  public itemClick(item: any) {
    this.viewCtrl.dismiss(item);
  }

}
