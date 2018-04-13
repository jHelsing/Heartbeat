import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdatePatientPage } from './update-patient';

@NgModule({
  declarations: [
    UpdatePatientPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdatePatientPage),
  ],
})
export class UpdatePatientPageModule {}
