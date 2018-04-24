import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, PopoverController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Patient } from '../../models/patient';
import { Observable } from 'rxjs/Observable';
import { AddPatientPage } from '../add-patient/add-patient';
import { PatientDetailPage } from '../patient-detail/patient-detail';
import { PatientProvider } from '../../providers/patient/patient';
import 'rxjs/Rx';
import { PopoverComponent } from '../../components/popover/popover';

@IonicPage()
@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html',
})
export class PatientPage {
  public patients;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public patientProvider: PatientProvider, public popoverCtrl: PopoverController) {
    const specificDoctor = navParams.get('doctor');
    this.patients = patientProvider.getPatients(specificDoctor);
  }

  public goToAddPatient() {
    this.navCtrl.push(AddPatientPage);
  }

  public viewDetails(patient) {
    this.navCtrl.push(PatientDetailPage, { patient });
  }

  public presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev:myEvent
    });

    popover.onDidDismiss(popoverData =>{
      alert(JSON.stringify(popoverData.item));
      console.log(popoverData);
    })

  }

}
