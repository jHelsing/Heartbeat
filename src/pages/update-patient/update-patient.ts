import { Component } from '@angular/core';
import { IonicPage,
         NavController,
         NavParams,
         AlertController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuxProvider } from '../../providers/aux';
import { Doctor } from '../../models/doctor';
import { Allergy } from '../../models/allergy';
import { Room } from '../../models/room';
import { PatientProvider } from '../../providers/patient/patient';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-update-patient',
  templateUrl: 'update-patient.html',
})
export class UpdatePatientPage {
  public patient;
  public clonedPatient;
  public bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  public doctors: Observable<Doctor[]>;
  public allergies: Observable<Allergy[]>;
  public rooms: Observable<Room[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public fireStore: AngularFirestore,
              public alertCtrl: AlertController,
              public patientProvider: PatientProvider,
              private aux: AuxProvider) {
    this.patient = navParams.get('patient');
    this.clonedPatient = Object.assign({}, this.patient);
    this.rooms = patientProvider.getRooms();
    this.doctors = patientProvider.getDoctors();
    this.allergies = patientProvider.getAllergies();
  }

  public updatePatient() {
    this.clonedPatient.roomRef = this.aux.ref('rooms', this.clonedPatient.roomRef.id);
    this.clonedPatient.allergy = this.aux.ref('allergies', this.clonedPatient.allergy.id);
    this.clonedPatient.doctor = this.aux.ref('doctors', this.clonedPatient.doctor.id);
    delete this.clonedPatient.roomObj;
    delete this.clonedPatient.allergyObj;
    delete this.clonedPatient.doctorObj;
    delete this.clonedPatient.$id;
    this.patientProvider.updatePatient(this.patient, this.clonedPatient);
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
