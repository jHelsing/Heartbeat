import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Nurse } from '../../models/nurse';
import { NurseProvider } from '../../providers/nurse/nurse';
import { Observable } from 'rxjs/Observable';
import { LoginPage } from '../login/login';
import { PatientListPage } from '../patient-list/patient-list';
import { DoctorRegistration } from '../add-doctor/add-doctor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public nurses: Observable<Nurse[]>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public nurseProvider: NurseProvider) {
    this.nurses = nurseProvider.getNurses();
  }

  public doctorView() {
    this.navCtrl.push(DoctorRegistration);
  }

  public addNursePrompt() {
    this.nurseProvider.addNursePrompt();
  }

  public updateNursePrompt(nurse: Nurse) {
    this.nurseProvider.updateNursePrompt(nurse);
  }

  public removeNurse(nurse: Nurse) {
    this.nurseProvider.removeNurse(nurse);
  }

  public goToPatient() {
    /*
     * TODO updated this according to the doctor ID after adding tab navigation
     * The doctor id should be sent into PatientListPage if we are to show
     * the patients of a doctor.
     */
    // let doctor = 'DOCTOR ID';
    this.navCtrl.push(PatientListPage);
  }

}
