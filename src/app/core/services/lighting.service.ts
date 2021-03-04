import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { LightScene } from '../models/lighting/light-scene';

@Injectable({
  providedIn: 'root'
})
export class LightingService {

  private apiUrl = environment.apiUrl + 'lighting/';

  constructor(private http: HttpClient) { }

  public getLightScenes(): Observable<LightScene[]> {
    const url = this.apiUrl + 'scenes';
    return this.http.get<LightScene[]>(url);
  }

  public applyLightScene(id: number): Observable<unknown> {
    const url = this.apiUrl + `scenes/${id}/active`;
    return this.http.get(url);
  }

}
