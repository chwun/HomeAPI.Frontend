import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LightingRoutingModule } from './lighting-routing.module';
import { LightingOverviewComponent } from './components/lighting-overview/lighting-overview.component';
import { LightingScenesComponent } from './components/lighting-scenes/lighting-scenes.component';
import { LightingHomeComponent } from './components/lighting-home/lighting-home.component';
import { LightingLightsComponent } from './components/lighting-lights/lighting-lights.component';

@NgModule({
  declarations: [
    LightingOverviewComponent,
    LightingHomeComponent,
    LightingScenesComponent,
    LightingLightsComponent
  ],
  imports: [
    CommonModule,
    LightingRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    MatSnackBarModule
  ]
})
export class LightingModule { }
