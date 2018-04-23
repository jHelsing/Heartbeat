import { Component } from '@angular/core';
import { IonicPage,
         NavController,
         AlertController } from 'ionic-angular';
import { PatientProvider } from '../../providers/patient/patient';
import { Patient } from '../../models/patient';
import { Room } from '../../models/room';
import { Allergy } from '../../models/allergy';
import { Doctor } from '../../models/doctor';
import { PatientPage } from '../patient/patient';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-add-patient',
  templateUrl: 'add-patient.html',
})
export class AddPatientPage {
  public newPatient = new Patient();
  public bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  public rooms: Observable<Room[]>;
  public allergies: Observable<Allergy[]>;
  public doctors: Observable<Doctor[]>;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public patientProvider: PatientProvider) {
    this.rooms = patientProvider.getRooms();
    this.allergies = patientProvider.getAllergies();
    this.doctors = patientProvider.getDoctors();
  }

  public addPatient(form) {
    this.patientProvider.newPatient(form.value);
    const prompt = this.alertCtrl.create({
      message: 'Patient added',
    });
    prompt.present();
    this.navCtrl.push(PatientPage);
  }

  public resetForm() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}
