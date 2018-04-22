import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Patient } from '../../models/patient';
import { Doctor } from '../../models/doctor';
import { Allergy } from '../../models/allergy';
import { Room } from '../../models/room';
import { Observable } from 'rxjs/Observable';
import { PatientProvider } from '../../providers/patient/patient';

@IonicPage()
@Component({
  selector: 'page-update-patient',
  templateUrl: 'update-patient.html',
})
export class UpdatePatientPage {
  public patient;
  public clonedPatient = new Patient();
  public bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  public patients: Observable<Patient[]>;
  public doctors: Observable<Doctor[]>;
  public allergies: Observable<Allergy[]>;
  public rooms: Observable<Room[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireStore: AngularFirestore,
              public alertCtrl: AlertController, public patientProvider: PatientProvider) {
    this.patient = navParams.get('patient');
    this.clonedPatient = Object.assign({}, this.patient);
    this.rooms = patientProvider.getRooms();
    this.doctors = patientProvider.getDoctors();
    this.allergies = patientProvider.getAllergies();
  }

  public updatePatient(patient) {
    this.clonedPatient.roomRef = this.fireStore.collection('/rooms').doc(patient.room).ref;
    this.clonedPatient.doctor = this.fireStore.collection('/doctors').doc(patient.doctor).ref;
    this.clonedPatient.allergy = this.fireStore.collection('/allergies').doc(patient.allergy).ref;
    this.patientProvider.updatePatient(this.clonedPatient);
    const prompt = this.alertCtrl.create({
      message: 'Patient updated',
    });
    prompt.present();
    this.navCtrl.popToRoot();
  }

  /*public resetForm() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }*/
}
