import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController, ModalController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Doctor } from '../../models/doctor';
import { DoctorProvider } from '../../providers/doctor/doctor';
import { PatientProvider } from '../../providers/patient/patient';
import { DoctorDetailPage } from '../doctor-detail/doctor-detail';
import { AngularFirestore } from 'angularfire2/firestore';

@IonicPage()
@Component({
  selector: 'page-doctor-list',
  templateUrl: 'doctor-list.html',
})
export class DoctorListPage {
  public doctorObservable: Observable<Doctor[]>;

  constructor(public navCtrl: NavController, public doctorProvider: DoctorProvider,
              public patientProvider: PatientProvider, public modalCtrl: ModalController,
              public popoverCtrl: PopoverController, public fireStore: AngularFirestore) {
    this.doctorObservable = doctorProvider.getDoctors();
  }

  public addDoctorModal() {
    const addDoctorPage = this.modalCtrl.create('AddDoctorPage');
    addDoctorPage.present();
  }

  public viewDetails(doctor) {
    this.navCtrl.push(DoctorDetailPage, { doctor });
  }

  // Delete a doctor from DB and transfer his/her patients on cascade
  public removeDoctor(doctor: Doctor) {
    // First transfer all associated patients to the default doctor
    const defaultDoctor = this.fireStore.doc('doctors/unassigned').ref;
    this.patientProvider.getPatients(doctor.$id).forEach((patients) => {
      patients.forEach((patient) => this.patientProvider.updatePatient(patient, { doctor: defaultDoctor }));
    });
    // Then delete the doctor
    this.doctorProvider.removeDoctor(doctor);
  }

  public updateDoctor(doctor: Doctor, data) {
    this.doctorProvider.updateDoctor(doctor, data);
  }

  public presentPopover(myEvent) {
    const popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent,
    });
  }
}
