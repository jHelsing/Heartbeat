import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { LoginProvider } from '../../providers/login/login';
import { PopoverComponent } from '../../components/popover/popover';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Doctor } from '../../models/doctor';
import { DoctorProvider } from '../../providers/doctor/doctor';
import { DoctorRegistration } from '../add-doctor/add-doctor';

@IonicPage()
@Component({
  selector: 'page-doctor-list',
  templateUrl: 'doctor-list.html',
})
export class DoctorListPage {
  public doctorObservable: Observable<Doctor[]>;

  constructor(public navCtrl: NavController, public doctorProvider: DoctorProvider, public modalCtrl: ModalController,
              public popoverCtrl: PopoverController, public loginProvider: LoginProvider) {
    this.doctorObservable = doctorProvider.getDoctors();
  }

  public addDoctorModal() {
    const createDoctorModal = this.modalCtrl.create(DoctorRegistration);
    createDoctorModal.present();
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
