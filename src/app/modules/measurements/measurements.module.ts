import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeasurementsRoutingModule } from './measurements-routing.module';
import { MeasurementsOverviewComponent } from './components/measurements-overview/measurements-overview.component';
import { MeasurementsTemperaturesComponent } from './components/measurements-temperatures/measurements-temperatures.component';
import { MeasurementsHomeComponent } from './components/measurements-home/measurements-home.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    MeasurementsOverviewComponent,
    MeasurementsTemperaturesComponent,
    MeasurementsHomeComponent
  ],
  imports: [
    CommonModule,
    MeasurementsRoutingModule,
    MatTabsModule
  ]
})
export class MeasurementsModule { }
