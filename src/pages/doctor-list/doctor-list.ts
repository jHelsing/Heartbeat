import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Doctor } from '../../models/doctor';
import { DoctorProvider } from '../../providers/doctor/doctor';

@IonicPage()
@Component({
  selector: 'page-doctor-list',
  templateUrl: 'doctor-list.html',
})
export class DoctorListPage {
  public doctorObservable: Observable<Doctor[]>;

  constructor(public navCtrl: NavController, public doctorProvider: DoctorProvider) {
    this.doctorObservable = doctorProvider.getDoctors();
  }

  public addDoctorModal() {
    this.doctorProvider.addDoctorModal();
  }

  public removeDoctor(doctor: Doctor) {
    this.doctorProvider.removeDoctor(doctor);
  }

  public updateDoctor(doctor: Doctor) {
    this.doctorProvider.updateDoctor(doctor);
  }

}
