import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, ModalController} from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Patient } from '../../models/patient';
import { Doctor } from '../../models/doctor';
import { Allergy } from '../../models/allergy';
import { Room } from '../../models/room';
import { Observable } from 'rxjs/Observable';
import { UpdatePatientPage } from '../update-patient/update-patient';
import { AddCommentComponent } from '../../components/add-comment/add-comment';

@IonicPage()
@Component({
  selector: 'page-patient-detail',
  templateUrl: 'patient-detail.html',
})
export class PatientDetailPage {
  public patient;

  public patientsCollection: AngularFirestoreCollection<Patient>;
  public patients: Observable<Patient[]>;

  public doctorsCollection: AngularFirestoreCollection<Doctor>;
  public doctors: Observable<Doctor[]>;

  public allergiesCollection: AngularFirestoreCollection<Allergy>;
  public allergies: Observable<Allergy[]>;

  public roomsCollection: AngularFirestoreCollection<Room>;
  public rooms: Observable<Room[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController, public fireStore: AngularFirestore,
              public modalCtrl: ModalController) {
    this.patient = navParams.get('patient');

    this.patientsCollection = fireStore.collection<Patient>('/patients');
    this.patients = this.patientsCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Patient,
    })));

    this.doctorsCollection = fireStore.collection<Doctor>('/doctors');
    this.doctors = this.doctorsCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Doctor,
    })));

    this.allergiesCollection = fireStore.collection<Allergy>('/allergies');
    this.allergies = this.allergiesCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Allergy,
    })));

    this.roomsCollection = fireStore.collection<Room>('/rooms');
    this.rooms = this.roomsCollection.snapshotChanges().map((actions) => actions.map((action) => ({
      $id: action.payload.doc.id, ...action.payload.doc.data() as Room,
    })));
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad PatientDetailPage');
    console.log(this.patient);
  }

  public removeUser(patient: Patient) {
    console.log('Remove', patient);
    this.patientsCollection.doc(patient.$id).delete();
  }

  public goToUpdatePatient(patient) {
    this.navCtrl.push(UpdatePatientPage, { patient });
  }

  public addComment() {
    const commentModal = this.modalCtrl.create(AddCommentComponent, { patientId: this.patient.$id}, {});
    commentModal.present();

  }

}
