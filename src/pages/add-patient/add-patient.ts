import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Patient } from '../../models/patient';
import { Doctor } from '../../models/doctor';
import { Allergy } from '../../models/allergy';
import { Room } from '../../models/room';
import { Observable } from 'rxjs/Observable';
import { PatientPage } from '../patient/patient';
import { NgForm } from '@angular/forms';
import { PatientProvider } from '../../providers/patient/patient';

@IonicPage()
@Component({
  selector: 'page-add-patient',
  templateUrl: 'add-patient.html',
})
export class AddPatientPage {
  public newPatient = { };
  public bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  public rooms;
  public doctors;
  public allergies;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
              public fireStore: AngularFirestore, public patientProvider: PatientProvider) {
    this.rooms = patientProvider.getRooms();
    this.doctors = patientProvider.getDoctors();
    this.allergies = patientProvider.getAllergies();
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
