import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPatientsPage } from './list-patients';

@NgModule({
  declarations: [
    ListPatientsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPatientsPage),
  ],
})
export class ListPatientsPageModule {}
