import { Component, OnInit } from '@angular/core';
import { LightScene } from 'src/app/core/models/lighting/light-scene';
import { LightingService } from 'src/app/core/services/lighting.service';

@Component({
  selector: 'app-lighting-overview',
  templateUrl: './lighting-overview.component.html',
  styleUrls: ['./lighting-overview.component.css']
})
export class LightingOverviewComponent implements OnInit {

  lightScenes: LightScene[];

  constructor(private lighting: LightingService) { }

  ngOnInit(): void {
    this.lighting.getLightScenes().subscribe(
      result => {
        this.lightScenes = result;
      },
      error => console.log(error.error)
    );
  }

  loadLightScene(sceneId: number) {
    this.lighting.applyLightScene(sceneId).subscribe(
      result => {},
      error => console.log(error.error)
    );
  }

}
