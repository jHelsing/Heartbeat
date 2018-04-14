import { NgModule } from '@angular/core';
import { PatientFilterPipe } from './patient-filter/patient-filter';
@NgModule({
	declarations: [PatientFilterPipe],
	imports: [],
	exports: [PatientFilterPipe]
})
export class PipesModule {}
