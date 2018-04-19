import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { PatientPage } from '../../pages/patient/patient';
import { DoctorListPage } from '../../pages/doctor-list/doctor-list';
import { NurseListPage } from '../../pages/nurse-list/nurse-list';

@IonicPage()
@Component({
  selector: 'page-admin-tabs',
  templateUrl: 'admin-tabs.html',
})
export class AdminTabs {
  public tab1Root = PatientPage;
  public tab2Root = DoctorListPage;
  public tab3Root = NurseListPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
