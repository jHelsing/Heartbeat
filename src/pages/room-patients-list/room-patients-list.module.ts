import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomPatientsListPage } from './room-patients-list';

@NgModule({
  declarations: [
    RoomPatientsListPage,
  ],
  imports: [
    IonicPageModule.forChild(RoomPatientsListPage),
  ],
})
export class RoomPatientsListPageModule {}
