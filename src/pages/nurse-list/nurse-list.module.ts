import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NurseListPage } from './nurse-list';

@NgModule({
  declarations: [
    NurseListPage,
  ],
  imports: [
    IonicPageModule.forChild(NurseListPage),
  ],
})
export class NurseListPageModule {}
