import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Doctor } from '../../models/doctor';
import { Speciality } from '../../models/speciality';
import { Room } from '../../models/room';
import { Observable } from 'rxjs/Rx';
import { UtilsProvider } from '../../providers/utils/utils';
import { DoctorProvider } from '../../providers/doctor/doctor';
import { RoomProvider } from '../../providers/room/room';
import { SpecialityProvider } from '../../providers/speciality/speciality';

@IonicPage()
@Component({
  selector: 'page-doctor',
  templateUrl: 'add-doctor.html',
})

export class AddDoctorPage {
  public doctor;
  public clonedDoctor;
  public doctorObservable: Observable<Doctor[]>;
  public roomObservable: Observable<Room[]>;
  public specialityObservable: Observable<Speciality[]>;
  public addingNewDoctor: boolean; // False is updating existing doctor.

  constructor(public doctorProvider: DoctorProvider,
              public navCtrl: NavController,
              public toastCtrl: ToastController,
              public utl: UtilsProvider,
              public roomProvider: RoomProvider,
              public specialityProvider: SpecialityProvider,
              public viewCtrl: ViewController,
              public navParams: NavParams) {
    this.doctor = navParams.get('doctor');
    this.addingNewDoctor = this.doctor == null;
    this.clonedDoctor = Object.assign({}, this.doctor);
    if (this.addingNewDoctor) {
      this.clonedDoctor.roomRef = { id: undefined };
    }
    this.doctorObservable = doctorProvider.getDoctors();
    this.roomObservable = roomProvider.getRooms();
    this.specialityObservable = specialityProvider.getSpecialities();
  }

  /*public addDoctor(doctor: Doctor) {
    this.doctorProvider.addDoctor(doctor);
    this.goBack();
  }*/

  public addOrUpdateDoctor(doctor) {
    this.clonedDoctor.roomRef = this.utl.ref('rooms', doctor.room);
    let msg = 'Doctor ';
    if (this.addingNewDoctor) {
      this.doctorProvider.addDoctor(this.clonedDoctor);
      msg += 'added';
    } else {
      delete this.clonedDoctor.room;
      delete this.clonedDoctor.speciality;
      delete this.clonedDoctor.$id;
      this.doctorProvider.updateDoctor(this.doctor, this.clonedDoctor);
      msg += 'updated';
    }
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bot',
    });
    toast.present();
    this.goBack();
  }

  public goBack() {
    this.viewCtrl.dismiss();
  }
}
