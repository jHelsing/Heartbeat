import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { AdminTabs } from '../pages/admin-tabs/admin-tabs';
import { PatientListPage } from '../pages/patient-list/patient-list';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {

  // public rootPage: any = AdminTabs;
  public rootPage: any = PatientListPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
