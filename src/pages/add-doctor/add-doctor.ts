import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Speciality } from '../../models/speciality';
import { Room } from '../../models/room';
import { Observable } from 'rxjs/Rx';
import { UtilsProvider } from '../../providers/utils/utils';
import { DoctorProvider } from '../../providers/doctor/doctor';
import { LoginProvider } from '../../providers/login/login';
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
  public password;
  public roomObservable: Observable<Room[]>;
  public specialityObservable: Observable<Speciality[]>;
  public addingNewDoctor: boolean; // False is updating existing doctor.

  constructor(public doctorProvider: DoctorProvider,
              public navCtrl: NavController,
              public toastCtrl: ToastController,
              public utl: UtilsProvider,
              public roomProvider: RoomProvider,
              public specialityProvider: SpecialityProvider,
              public loginProvider: LoginProvider,
              public viewCtrl: ViewController,
              public navParams: NavParams) {
    this.doctor = navParams.get('doctor');
    this.addingNewDoctor = this.doctor == null || this.doctor === undefined;
    this.clonedDoctor = Object.assign({}, this.doctor);
    if (this.addingNewDoctor) {
      this.clonedDoctor.roomRef = { id: undefined };
      this.clonedDoctor.specialityRef = { id: undefined };
    }
    this.roomObservable = roomProvider.getRooms();
    this.specialityObservable = specialityProvider.getSpecialities();
  }

  /*public addDoctor(doctor: Doctor) {
    this.doctorProvider.addDoctor(doctor);
    this.goBack();
  }*/

  public addOrUpdateDoctor(doctor) {
    this.clonedDoctor.roomRef = this.utl.ref('rooms', doctor.roomRef);
    this.clonedDoctor.specialityRef = this.utl.ref('specialties', doctor.specialityRef);
    if (this.addingNewDoctor) {
      this.loginProvider.signup(this.clonedDoctor.email, this.password).then((newUser) => {
        this.utl.col('doctors').doc(newUser.uid).set(this.clonedDoctor);
        this.showPopupAndClose('Doctor added');
      })
      .catch((err) => {
        this.showPopupAndClose(err.message);
      });
    } else {
      delete this.clonedDoctor.roomObj;
      delete this.clonedDoctor.specialityObj;
      delete this.clonedDoctor.$id;
      this.doctorProvider.updateDoctor(this.doctor, this.clonedDoctor);
      this.showPopupAndClose('Doctor updated');
    }
  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }

  private showPopupAndClose(msg: string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bot',
    });
    toast.present();
    this.closeModal();
  }
}
