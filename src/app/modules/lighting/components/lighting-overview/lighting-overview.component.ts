import { Component, OnInit } from '@angular/core';
import { LightScene } from 'src/app/core/models/lighting/light-scene';
import { LightingService } from 'src/app/core/services/lighting.service';

@Component({
  selector: 'app-lighting-overview',
  templateUrl: './lighting-overview.component.html',
  styleUrls: ['./lighting-overview.component.css']
})
export class LightingOverviewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
