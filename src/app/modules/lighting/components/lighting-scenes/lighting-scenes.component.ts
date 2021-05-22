import { Component, OnInit } from '@angular/core';
import { LightScene } from 'src/app/core/models/lighting/light-scene';
import { LightingService } from 'src/app/core/services/lighting.service';

@Component({
  selector: 'app-lighting-scenes',
  templateUrl: './lighting-scenes.component.html',
  styleUrls: ['./lighting-scenes.component.css']
})
export class LightingScenesComponent implements OnInit {

  lightScenes: LightScene[];

  constructor(private lighting: LightingService) { }

  ngOnInit(): void {
    this.getLightScenes();
  }

  getLightScenes() {
    this.lighting.getLightScenes().subscribe(
      result => this.lightScenes = result,
      error => console.log(error)
    );
  }

  loadLightScene(sceneId: number) {
    this.lighting.applyLightScene(sceneId).subscribe(
      result => { },
      error => console.log(error)
    );
  }
}
