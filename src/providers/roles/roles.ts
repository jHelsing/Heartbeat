import { PatientListPage } from '../../pages/patient-list/patient-list';
import { AdminTabs } from '../../pages/admin-tabs/admin-tabs';
import { Injectable } from '@angular/core';

@Injectable()
export class RolesProvider {

  private roleCollectionNames = ['nurses', 'doctors', 'administrators'];
  private roleCollectionPageMap = {
    nurses: PatientListPage,
    doctors: PatientListPage,
    administrators: AdminTabs,
  };

  public getRoleCollectionNames() {
    return this.roleCollectionNames;
  }

  public getPage(role: string): any {
    return this.roleCollectionPageMap[role];
  }

}
