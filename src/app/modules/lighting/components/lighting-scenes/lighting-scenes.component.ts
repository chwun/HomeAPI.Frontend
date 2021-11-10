import { Component, OnInit } from '@angular/core';
import { LightScene } from 'src/app/core/models/lighting/light-scene';
import { LightingService } from 'src/app/core/services/lighting.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lighting-scenes',
  templateUrl: './lighting-scenes.component.html',
  styleUrls: ['./lighting-scenes.component.css']
})
export class LightingScenesComponent implements OnInit {
  lightScenes: LightScene[];

  constructor(
    private lighting: LightingService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getLightScenes();
  }

  getLightScenes() {
    this.lighting.getLightScenes().subscribe(
      (result) => (this.lightScenes = result),
      (error) => console.log(error)
    );
  }

  loadLightScene(sceneId: number) {
    this.lighting.applyLightScene(sceneId).subscribe(
      (result) => {
        const scene = this.lightScenes.find((x) => x.id === sceneId);
        const sceneName = scene?.name ?? sceneId;

        this.snackBar.open(`Lichtszene "${sceneName}" geladen`, 'Ok', {
          duration: 2000
        });
      },
      (error) => console.log(error)
    );
  }
}
