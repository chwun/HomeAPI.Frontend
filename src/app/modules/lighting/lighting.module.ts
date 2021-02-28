import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { LightingRoutingModule } from './lighting-routing.module';
import { LightingOverviewComponent } from './components/lighting-overview/lighting-overview.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    LightingOverviewComponent
  ],
  imports: [
    CommonModule,
    LightingRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class LightingModule { }
