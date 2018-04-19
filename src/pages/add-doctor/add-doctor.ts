import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Doctor } from '../../models/doctor';
import { Speciality } from '../../models/speciality';
import { Room } from '../../models/room';
import { Observable } from 'rxjs/Rx';
import { DoctorProvider } from '../../providers/doctor/doctor';

@Component({
  selector: 'page-doctor',
  templateUrl: 'add-doctor.html',
})

export class DoctorRegistration {
  public doctor = {};
  public defaultTime = {
    month: '2018-01-01',
    timeStarts: '08:00',
    timeEnds: '17:00',
  };
  private doctorObservable: Observable<Doctor[]>;
  private roomObservable: Observable<Room[]>;
  private specialityObservable: Observable<Speciality[]>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public doctorProvider: DoctorProvider) {
    this.doctorObservable = doctorProvider.getDoctor();
    this.roomObservable = doctorProvider.getRooms();
    this.specialityObservable = doctorProvider.getSpecialities();
  }

  public addDoctor(doctor: Doctor) {
    this.doctorProvider.addDoctor(doctor);
  }

  public goBack() {
    this.navCtrl.pop();
  }
}
