import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeModule } from './modules/home/home.module';
import { LightingModule } from './modules/lighting/lighting.module';
import { HttpClientModule } from '@angular/common/http';
import { MeasurementsModule } from './modules/measurements/measurements.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    HomeModule,
    LightingModule,
    MeasurementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
