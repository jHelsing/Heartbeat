import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-doctor',
    templateUrl: 'doctorRegistration.html',
  })

  export class DoctorRegistration{
    constructor(public navCtrl: NavController, private navParams: NavParams) {
        
      }
  }