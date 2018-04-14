import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Nurse } from '../../models/nurse';
import { NurseProvider } from '../../providers/nurse/nurse';
import { Observable } from 'rxjs/Observable';
import { PatientPage } from '../patient/patient';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public nurses: Observable<Nurse[]>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public nurseProvider: NurseProvider) {
    this.nurses = nurseProvider.getNurses();
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
     * TODO This should be updated when connected with tab bar.
     * The doctor constant should contain the ID of the logged in doctor.
     * If we are showing the patientPage without filtering for a specific doctor
     * we do not need to supply anything to the PatientPage, at least nothing
     * that is accessed as 'doctor'.
     * When this has been implemented the code should have the following push:
     * this.navCtrl.push(PatientPage, { doctor });
     */
    // const doctor = 'ATjOUbjPJT34BwP8zX7C';
    this.navCtrl.push(PatientPage);
  }

}
