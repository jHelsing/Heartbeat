import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNursePage } from './add-nurse';

@NgModule({
  declarations: [
    AddNursePage,
  ],
  imports: [
    IonicPageModule.forChild(AddNursePage),
  ],
})
export class AddNursePageModule {}
