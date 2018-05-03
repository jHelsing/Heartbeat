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
import { Storage } from '@ionic/Storage';

@IonicPage()
@Component({
  selector: 'page-patient',
  templateUrl: 'patient-list.html',
})
export class PatientListPage {
  public userId;
  public userRole;
  public patients;
  public role: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public patientProvider: PatientProvider, public popoverCtrl: PopoverController,
              public modalCtrl: ModalController, public utl: UtilsProvider, storage: Storage) {
    storage.get('userRole').then((data) => {
      this.role = data;
    });
    this.userId = navParams.get('userId');
    this.userRole = navParams.get('userRole');
    this.patients = patientProvider.getPatients(this.userRole === 'doctors' ? this.userId : null);

  }

  public openModalAddPatient() {
    const addPatientPage = this.modalCtrl.create('AddPatientPage');
    addPatientPage.present();
  }

  public viewDetails(patient) {
    this.navCtrl.push(PatientDetailPage, { patient, userId: this.userId, userRole: this.userRole });
  }

  public presentPopover(myEvent) {
    const popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent,
    });
  }
}
