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
  public bloodTypes = ['Unknown', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  public rooms: Observable<Room[]>;
  public allergies: Observable<Allergy[]>;
  public doctors: Observable<Doctor[]>;
  public addingNewPatient: boolean; // False is updating existing patient.

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public utl: UtilsProvider,
              public patientProvider: PatientProvider,
              public viewCtrl: ViewController,
              public navParams: NavParams) {
    this.patient = navParams.get('patient');
    this.addingNewPatient = this.patient == null || this.patient === undefined;
    this.clonedPatient = Object.assign({}, this.patient);
    if (this.addingNewPatient) {
      this.clonedPatient.allergyRef = { id: undefined };
      this.clonedPatient.roomRef = { id: undefined };
      this.clonedPatient.doctorRef = { id: undefined };
      this.clonedPatient.severity = 0;
    }
    this.rooms = patientProvider.getRooms();
    this.allergies = patientProvider.getAllergies();
    this.doctors = patientProvider.getDoctors();
  }

  public addOrUpdatePatient(patient) {
    this.clonedPatient.roomRef = this.utl.ref('rooms', patient.roomRef);
    this.clonedPatient.allergyRef = this.utl.ref('allergies', patient.allergyRef);
    this.clonedPatient.doctorRef = this.utl.ref('doctors', patient.doctorRef);
    let msg = 'Patient ';
    if (this.addingNewPatient) {
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
