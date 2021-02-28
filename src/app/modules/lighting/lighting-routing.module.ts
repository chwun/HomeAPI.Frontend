import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LightingOverviewComponent } from './components/lighting-overview/lighting-overview.component';

const routes: Routes = [
  {
    path: 'lightingOverview',
    component: LightingOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LightingRoutingModule { }
