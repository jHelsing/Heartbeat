import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../pages/login/login';
import { AdminTabs } from '../pages/admin-tabs/admin-tabs';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {

  // public rootPage: any = LoginPage;
  public rootPage: any = AdminTabs;

  constructor(platform: Platform, statusBar: StatusBar) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
    });
  }
}
