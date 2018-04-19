import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdminTabs } from '../pages/admin-tabs/admin-tabs';
import { NurseListPage } from '../pages/nurse-list/nurse-list';
import { DoctorListPage } from '../pages/doctor-list/doctor-list';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  public rootPage: any = AdminTabs;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
