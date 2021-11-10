import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeasurementsComponent } from './measurements.component';
import { MeasurementsOverviewComponent } from './components/measurements-overview/measurements-overview.component';
import { MeasurementsTemperaturesComponent } from './components/measurements-temperatures/measurements-temperatures.component';

const routes: Routes = [
  {
    path: '',
    component: MeasurementsComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        component: MeasurementsOverviewComponent
      },
      {
        path: 'temperatures',
        component: MeasurementsTemperaturesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeasurementsRoutingModule {}
