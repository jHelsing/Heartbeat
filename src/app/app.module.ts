import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PatientPage } from '../pages/patient/patient';
import { AddPatientPage } from '../pages/add-patient/add-patient';
import { PatientDetailPage } from '../pages/patient-detail/patient-detail';
import { UpdatePatientPage } from '../pages/update-patient/update-patient';
import { NurseProvider } from '../providers/nurse/nurse';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import firebaseConfig from '../config/firebase.config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PatientPage,
    AddPatientPage,
    PatientDetailPage,
    UpdatePatientPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PatientPage,
    AddPatientPage,
    PatientDetailPage,
    UpdatePatientPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NurseProvider,
  ],
})
export class AppModule {}
