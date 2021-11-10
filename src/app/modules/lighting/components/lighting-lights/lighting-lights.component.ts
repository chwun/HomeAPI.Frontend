import { Component, OnInit } from '@angular/core';
import { Light } from 'src/app/core/models/lighting/light';
import { LightingService } from 'src/app/core/services/lighting.service';

@Component({
  selector: 'app-lighting-lights',
  templateUrl: './lighting-lights.component.html',
  styleUrls: ['./lighting-lights.component.css']
})
export class LightingLightsComponent implements OnInit {
  lights: Light[];

  constructor(private lighting: LightingService) {}

  ngOnInit(): void {
    this.getLights();
  }

  getLights() {
    this.lighting.getLights().subscribe(
      (result) => (this.lights = result),
      (error) => console.log(error)
    );
  }
}
