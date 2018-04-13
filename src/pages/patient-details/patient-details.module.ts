import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientDetailsPage } from './patient-details';

@NgModule({
  declarations: [
    PatientDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientDetailsPage),
  ],
})
export class PatientDetailsPageModule {}
