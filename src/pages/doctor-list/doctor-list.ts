import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController, ModalController } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { PopoverComponent } from '../../components/popover/popover';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Doctor } from '../../models/doctor';
import { DoctorProvider } from '../../providers/doctor/doctor';
import { DoctorDetailPage } from '../doctor-detail/doctor-detail';

@IonicPage()
@Component({
  selector: 'page-doctor-list',
  templateUrl: 'doctor-list.html',
})
export class DoctorListPage {
  public doctorObservable: Observable<Doctor[]>;

  constructor(public navCtrl: NavController, public doctorProvider: DoctorProvider, public modalCtrl: ModalController,
              public popoverCtrl: PopoverController, public utl: UtilsProvider) {
    this.doctorObservable = doctorProvider.getDoctors();
  }

  public addDoctorModal() {
    const addDoctorPage = this.modalCtrl.create('AddDoctorPage');
    addDoctorPage.present();
  }

  public viewDetails(doctor) {
    this.navCtrl.push(DoctorDetailPage, { doctor });
  }

  public removeDoctor(doctor: Doctor) {
    this.doctorProvider.removeDoctor(doctor);
  }

  public updateDoctor(doctor: Doctor, data) {
    this.doctorProvider.updateDoctor(doctor, data);
  }

  public presentPopover(myEvent) {
    const popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent,
    });
  }
}
