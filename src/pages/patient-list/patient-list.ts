import { Component } from '@angular/core';
import { IonicPage,
         NavParams,
         NavController,
         ModalController,
         PopoverController } from 'ionic-angular';
import { PatientDetailPage } from '../patient-detail/patient-detail';
import { UtilsProvider } from '../../providers/utils/utils';
import { PatientProvider } from '../../providers/patient/patient';
import 'rxjs/Rx';
import { PopoverComponent } from '../../components/popover/popover';

@IonicPage()
@Component({
  selector: 'page-patient',
  templateUrl: 'patient-list.html',
})
export class PatientListPage {
  public patients;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public patientProvider: PatientProvider, public popoverCtrl: PopoverController,
              public modalCtrl: ModalController, public utl: UtilsProvider) {
    const specificDoctor = navParams.get('doctor');
    this.patients = patientProvider.getPatients(specificDoctor);
  }

  public openModalAddPatient() {
    const addPatientPage = this.modalCtrl.create('AddPatientPage');
    addPatientPage.present();
  }

  public viewDetails(patient) {
    this.navCtrl.push(PatientDetailPage, { patient });
  }

  public presentPopover(myEvent) {
    const popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent,
    });
  }
}
