import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferPatientModal } from './transfer-patient';

@NgModule({
  declarations: [
    TransferPatientModal,
  ],
  imports: [
    IonicPageModule.forChild(TransferPatientModal),
  ],
  entryComponents: [
    TransferPatientModal,
  ],
})
export class TransferPatientModule {}
