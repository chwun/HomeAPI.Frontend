import { NgModule } from '@angular/core';

import { MeasurementsRoutingModule } from './measurements-routing.module';
import { MeasurementsOverviewComponent } from './components/measurements-overview/measurements-overview.component';
import { MeasurementsTemperaturesComponent } from './components/measurements-temperatures/measurements-temperatures.component';
import { MeasurementsComponent } from './measurements.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MeasurementsOverviewComponent,
    MeasurementsTemperaturesComponent,
    MeasurementsComponent
  ],
  imports: [
    SharedModule,
    MeasurementsRoutingModule
  ]
})
export class MeasurementsModule { }
