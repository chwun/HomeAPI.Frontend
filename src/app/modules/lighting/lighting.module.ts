import { NgModule } from '@angular/core';
import { LightingRoutingModule } from './lighting-routing.module';
import { LightingOverviewComponent } from './components/lighting-overview/lighting-overview.component';
import { LightingScenesComponent } from './components/lighting-scenes/lighting-scenes.component';
import { LightingComponent } from './lighting.component';
import { LightingLightsComponent } from './components/lighting-lights/lighting-lights.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LightingOverviewComponent,
    LightingComponent,
    LightingScenesComponent,
    LightingLightsComponent
  ],
  imports: [SharedModule, LightingRoutingModule]
})
export class LightingModule {}
