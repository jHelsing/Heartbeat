import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public doctorProvider: DoctorProvider, public modalCtrl: ModalController) {
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

}
