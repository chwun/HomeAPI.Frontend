import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'lighting',
    loadChildren: () =>
      import('./modules/lighting/lighting.module').then((m) => m.LightingModule)
  },
  {
    path: 'measurements',
    loadChildren: () =>
      import('./modules/measurements/measurements.module').then(
        (m) => m.MeasurementsModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
