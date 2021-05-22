import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Light } from '../models/lighting/light';

import { LightScene } from '../models/lighting/light-scene';

@Injectable({
  providedIn: 'root'
})
export class LightingService {

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: HttpClient) {
    this.apiUrl += 'lighting/';
  }

  getLights(): Observable<Light[]>{
    const url = this.apiUrl + 'lights';
    return this.http.get<Light[]>(url);
  }

  getLightScenes(): Observable<LightScene[]> {
    const url = this.apiUrl + 'scenes';
    return this.http.get<LightScene[]>(url);
  }

  applyLightScene(id: number): Observable<any> {
    const url = this.apiUrl + `scenes/${id}/active`;
    return this.http.get(url);
  }

}
