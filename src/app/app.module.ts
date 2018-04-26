import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PatientListPage } from '../pages/patient-list/patient-list';
import { PatientDetailPage } from '../pages/patient-detail/patient-detail';
import { NurseListPage } from '../pages/nurse-list/nurse-list';
import { DoctorListPage } from '../pages/doctor-list/doctor-list';
import { DoctorDetailPage } from '../pages/doctor-detail/doctor-detail';
import { NurseProvider } from '../providers/nurse/nurse';
import { LoginPage } from '../pages/login/login';
import { AdminTabs } from '../pages/admin-tabs/admin-tabs';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import firebaseConfig from '../config/firebase.config';
import { CommentProvider } from '../providers/comment/comment';
import { AddCommentComponent } from '../components/add-comment/add-comment';
import { DoctorProvider } from '../providers/doctor/doctor';
import { RoomProvider } from '../providers/room/room';
import { SpecialityProvider } from '../providers/speciality/speciality';
import { PatientProvider } from '../providers/patient/patient';
import { LoginProvider } from '../providers/login/login';
import { UtilsProvider } from '../providers/utils/utils';
import { PopoverComponent } from '../components/popover/popover';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    PatientListPage,
    PatientDetailPage,
    AddCommentComponent,
    AdminTabs,
    NurseListPage,
    DoctorListPage,
    DoctorDetailPage,
    PopoverComponent,
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
    LoginPage,
    PatientListPage,
    PatientDetailPage,
    AddCommentComponent,
    AdminTabs,
    NurseListPage,
    DoctorListPage,
    DoctorDetailPage,
    PopoverComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NurseProvider,
    CommentProvider,
    DoctorProvider,
    RoomProvider,
    SpecialityProvider,
    PatientProvider,
    LoginProvider,
    UtilsProvider,
  ],
})
export class AppModule {}
