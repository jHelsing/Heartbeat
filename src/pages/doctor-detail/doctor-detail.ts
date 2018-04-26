import { Component } from '@angular/core';
import { IonicPage,
         NavController,
         NavParams,
         ModalController} from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';

@IonicPage()
@Component({
  selector: 'page-doctor-detail',
  templateUrl: 'doctor-detail.html',
})
export class DoctorDetailPage {
  public doctor;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public utl: UtilsProvider) {
    this.doctor = navParams.get('doctor');
  }

  public openModalUpdateDoctor() {
    const data = { doctor : this.doctor };
    const addDoctorPage = this.modalCtrl.create('AddDoctorPage', data);
    addDoctorPage.present();
    this.navCtrl.pop();
  }
}
