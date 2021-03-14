import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  public getLightScenes(): Observable<LightScene[]> {
    const url = this.apiUrl + 'scenes';
    return this.http.get<LightScene[]>(url);
  }

  public applyLightScene(id: number): Observable<unknown> {
    const url = this.apiUrl + `scenes/${id}/active`;
    return this.http.get(url);
  }

}
