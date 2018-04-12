import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Doctor } from '../../models/doctor';
import { Observable } from 'rxjs/Observable';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'page-doctor',
    templateUrl: 'doctorRegistration.html',
  })

  export class DoctorRegistration{
    public doctorsCollection: AngularFirestoreCollection<Doctor>;
    public doctors: Observable<Doctor[]>;
    public doctorReg : FormGroup;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public fireStore: AngularFirestore, private formBuilder: FormBuilder) {
        this.doctorsCollection = fireStore.collection<Doctor>('/doctors');
        this.doctors = this.doctorsCollection.snapshotChanges().map((actions) => actions.map((action) => ({
          $id: action.payload.doc.id, ...action.payload.doc.data() as Doctor,
        })));
        this.doctorReg = this.formBuilder.group({
          email: new FormControl('', Validators.required),
          phone: new FormControl(''),
        })
    }
    
    public addDoctor(){
        this.doctorsCollection.add({ email: this.doctorReg.get('email').value, phone: this.doctorReg.controls.phone.value, workoursEnd: null, workoursStart: null});
    } 

    public event = {
        month: "2018-01-01",
        timeStarts: "08:08",
        timeEnds: "1990-02-23"
    }
  }