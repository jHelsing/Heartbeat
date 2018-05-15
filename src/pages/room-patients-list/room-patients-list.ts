import { Component } from '@angular/core';
import { IonicPage,
         NavParams,
         NavController,
         ModalController,
         PopoverController,
         ViewController,
         ToastController} from 'ionic-angular';
import { PatientDetailPage } from '../patient-detail/patient-detail';
import { UtilsProvider } from '../../providers/utils/utils';
import { PatientProvider } from '../../providers/patient/patient';
import 'rxjs/Rx';
import { PopoverComponent } from '../../components/popover/popover';
import { Storage } from '@ionic/storage';
import { SpecialityProvider } from '../../providers/speciality/speciality';
import { RoomProvider } from '../../providers/room/room';
import { DoctorProvider } from '../../providers/doctor/doctor';

@IonicPage()
@Component({
  selector: 'page-room-patients-list',
  templateUrl: 'room-patients-list.html',
})
export class RoomPatientsListPage {

  public patients;
  public room;

  constructor(public patientProvider: PatientProvider,
              public popoverCtrl: PopoverController,
              public modalCtrl: ModalController,
              public utl: UtilsProvider,
              storage: Storage,
              public doctorProvider: DoctorProvider,
              public navCtrl: NavController,
              public toastCtrl: ToastController,
              public roomProvider: RoomProvider,
              public specialityProvider: SpecialityProvider,
              public viewCtrl: ViewController,
              public navParams: NavParams) {
    this.room = navParams.get('room');
    const roomId = navParams.get('roomId');
    if (roomId) {
      this.patients = this.patientProvider.getPatientsInRoom(roomId);
    }
  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }
}
