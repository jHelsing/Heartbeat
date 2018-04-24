import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, ModalController, ViewController } from 'ionic-angular';
import { Doctor } from '../../models/doctor';
import { Speciality } from '../../models/speciality';
import { Room } from '../../models/room';
import { Observable } from 'rxjs/Rx';
import { DoctorProvider } from '../../providers/doctor/doctor';
import { RoomProvider } from '../../providers/room/room';
import { SpecialityProvider } from '../../providers/speciality/speciality';

@Component({
  selector: 'page-doctor',
  templateUrl: 'add-doctor.html',
})

export class DoctorRegistration {
  public doctor = {};
  private doctorObservable: Observable<Doctor[]>;
  private roomObservable: Observable<Room[]>;
  private specialityObservable: Observable<Speciality[]>;

  constructor(public doctorProvider: DoctorProvider, public navCtrl: NavController, public roomProvider: RoomProvider, specialityProvider: SpecialityProvider, public viewCtrl: ViewController) {
    this.doctorObservable = doctorProvider.getDoctors();
    this.roomObservable = roomProvider.getRooms();
    this.specialityObservable = specialityProvider.getSpecialities();
  }

  public addDoctor(doctor: Doctor) {
    this.doctorProvider.addDoctor(doctor);
    this.goBack();
  }

  public goBack() {
    this.viewCtrl.dismiss();
  }
}
