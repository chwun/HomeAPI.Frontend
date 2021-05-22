import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LightingHomeComponent } from './components/lighting-home/lighting-home.component';
import { LightingLightsComponent } from './components/lighting-lights/lighting-lights.component';
import { LightingOverviewComponent } from './components/lighting-overview/lighting-overview.component';
import { LightingScenesComponent } from './components/lighting-scenes/lighting-scenes.component';

const routes: Routes = [
  {
    path: 'lighting',
    component: LightingHomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        component: LightingOverviewComponent
      },
      {
        path: 'scenes',
        component: LightingScenesComponent
      },
      {
        path: 'lights',
        component: LightingLightsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LightingRoutingModule { }
