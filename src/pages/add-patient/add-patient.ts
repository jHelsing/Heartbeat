import { Component } from '@angular/core';
import { IonicPage,
         NavController,
         NavParams,
         ViewController,
         ToastController} from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { PatientProvider } from '../../providers/patient/patient';
import { Room } from '../../models/room';
import { Allergy } from '../../models/allergy';
import { Doctor } from '../../models/doctor';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-add-patient',
  templateUrl: 'add-patient.html',
})
export class AddPatientPage {
  public patient;
  public clonedPatient;
  public bloodTypes = ['unknown', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  public rooms: Observable<Room[]>;
  public allergies: Observable<Allergy[]>;
  public doctors: Observable<Doctor[]>;
  public add: boolean;

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public utl: UtilsProvider,
              public patientProvider: PatientProvider,
              public viewCtrl: ViewController,
              public navParams: NavParams) {
    this.patient = navParams.get('patient');
    this.add = this.patient == null;
    this.clonedPatient = Object.assign({}, this.patient);
    if (this.add) {
      this.clonedPatient.allergy = { id: undefined };
      this.clonedPatient.roomRef = { id: undefined };
      this.clonedPatient.doctor = { id: undefined };
    }
    this.rooms = patientProvider.getRooms();
    this.allergies = patientProvider.getAllergies();
    this.doctors = patientProvider.getDoctors();
  }

  public addOrUpdatePatient(patient) {
    this.clonedPatient.roomRef = this.utl.ref('rooms', patient.roomRef);
    this.clonedPatient.allergy = this.utl.ref('allergies', patient.allergy);
    this.clonedPatient.doctor = this.utl.ref('doctors', patient.doctor);
    let msg = 'Patient ';
    if (this.add) {
      this.patientProvider.addPatient(this.clonedPatient);
      msg += 'added';
    } else {
      delete this.clonedPatient.roomObj;
      delete this.clonedPatient.allergyObj;
      delete this.clonedPatient.doctorObj;
      delete this.clonedPatient.$id;
      this.patientProvider.updatePatient(this.patient, this.clonedPatient);
      msg += 'updated';
    }
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bot',
    });
    toast.present();

    this.closeModal();
  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }
}
