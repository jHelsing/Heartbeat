import { Component,
         ViewChild } from '@angular/core';
import { IonicPage,
         NavController,
         NavParams,
         ToastController,
         ModalController,
         Select} from 'ionic-angular';
import { PatientProvider } from '../../providers/patient/patient';
import { CommentProvider } from '../../providers/comment/comment';
import { UtilsProvider } from '../../providers/utils/utils';
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
              public modalCtrl: ModalController,
              public patientProvider: PatientProvider,
              public toastCtrl: ToastController,
              private commentProvider: CommentProvider,
              private utl: UtilsProvider) {
    this.patient = navParams.get('patient');
    this.doctors = patientProvider.getDoctors();
    this.newDoctor = this.patient.doctorRef.id;
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
    this.patientProvider.updatePatient(patient, { doctor: this.utl.ref('doctors', this.newDoctor) });
    const prompt = this.toastCtrl.create({
      message: 'Patient transfered',
      duration: 3000,
      position: 'bot',
    });
    prompt.present();
    this.navCtrl.pop();
  }

  public addComment() {
    const commentModal = this.modalCtrl.create(AddCommentComponent,
      { patientId: this.patient.$id, severity: this.patient.severity }, {});
    commentModal.present();
  }
}
