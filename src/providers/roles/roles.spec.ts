import { async } from '@angular/core/testing';
import { RolesProvider } from './roles';
import { PatientListPage } from '../../pages/patient-list/patient-list';

let rolesProvider: RolesProvider;

describe('Component: Root Component', () => {

  beforeEach(() => {
    rolesProvider = new RolesProvider();
  });

  afterEach(() => {
    rolesProvider = null;
  });

  it('is created', () => {
    expect(rolesProvider.getPage('nurses')).toBe(PatientListPage);
  });

});
