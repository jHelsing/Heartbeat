import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { PatientDetailsPage } from '../patient-details/patient-details';
/**
 * Generated class for the ListPatientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-patients',
  templateUrl: 'list-patients.html',
})
export class ListPatientsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPatientsPage');
  }

  itemTapped(event, item) {
    this.navCtrl.push(PatientDetailsPage, {
      item: item
    });
  }

}
