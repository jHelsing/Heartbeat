import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PatientPage } from '../pages/patient/patient';
import { AddPatientPage } from '../pages/add-patient/add-patient';
import { UpdatePatientPage } from '../pages/update-patient/update-patient';
import { PatientDetailPage } from '../pages/patient-detail/patient-detail';
@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  public rootPage: any = HomePage;
  // public rootPage: any = PatientPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
