import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-doctor-list',
  templateUrl: 'doctor-list.html',
})
export class DoctorListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
