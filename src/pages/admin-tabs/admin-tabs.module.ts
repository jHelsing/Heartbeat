import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminTabs } from './admin-tabs';

@NgModule({
  declarations: [
    AdminTabs,
  ],
  imports: [
    IonicPageModule.forChild(AdminTabs),
  ],
})
export class AdminTabsModule {}
