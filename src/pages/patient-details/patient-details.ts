import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Patient } from '../../models/patient';

@IonicPage()
@Component({
  selector: 'page-patient-details',
  templateUrl: 'patient-details.html',
})
export class PatientDetailsPage {
  public patient: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.patient = navParams.get('patient');
  }

}
