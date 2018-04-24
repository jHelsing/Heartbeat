import { Component,
         ViewChild } from '@angular/core';
import { IonicPage,
         NavController,
         NavParams,
         AlertController,
         ModalController,
         Select } from 'ionic-angular';
import { PatientProvider } from '../../providers/patient/patient';
import { CommentProvider } from '../../providers/comment/comment';
import { AuxProvider } from '../../providers/aux/aux';
import { AddCommentComponent } from '../../components/add-comment/add-comment';
import { Patient } from '../../models/patient';
import { Comment } from '../../models/comment';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-patient-detail',
  templateUrl: 'patient-detail.html',
})
export class PatientDetailPage {
  @ViewChild('select') public select: Select;
  public patient;
  public doctors;
  public newDoctor;
  public comments: Observable<Comment[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              public patientProvider: PatientProvider,
              private commentProvider: CommentProvider,
              private aux: AuxProvider) {
    this.patient = navParams.get('patient');
    this.doctors = patientProvider.getDoctors();
    this.newDoctor = this.patient.doctor.id;
    this.comments = this.commentProvider.getComments(this.patient.$id);
  }

  public openModalUpdatePatient() {
    const data = { patient : this.patient };
    const addPatientPage = this.modalCtrl.create('AddPatientPage', data);
    addPatientPage.present();
    this.navCtrl.pop();
  }

  public openDoctorsList() {
    this.select.open();
  }

  public transferPatient(patient: Patient) {
    this.patientProvider.updatePatient(patient, { doctor: this.aux.ref('doctors', this.newDoctor) });
    const prompt = this.alertCtrl.create({
      message: 'Patient transfered',
    });
    prompt.present();
    this.navCtrl.pop();
  }

  public addComment() {
    const commentModal = this.modalCtrl.create(AddCommentComponent, { patientId: this.patient.$id }, {});
    commentModal.present();

  }
}
