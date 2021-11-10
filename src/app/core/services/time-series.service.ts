import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataPoint } from '../models/timeseries/data-point';
import { TimeSeriesRange } from '../models/timeseries/time-series-range';
import { TimeSeriesResult } from '../models/timeseries/time-series-result';

@Injectable({
  providedIn: 'root'
})
export class TimeSeriesService {
  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: HttpClient
  ) {
    this.apiUrl += 'timeseries/';
  }

  getTimeSeries(
    measurementName: string,
    location: string,
    range: TimeSeriesRange
  ): Observable<TimeSeriesResult> {
    const params = new HttpParams()
      .set('measurementName', measurementName)
      .set('location', location)
      .set('range', range);

    const url = this.apiUrl;
    return this.http.get<TimeSeriesResult>(url, { params });
  }

  getPreconfiguredTimeSeries(
    range: TimeSeriesRange
  ): Observable<TimeSeriesResult[]> {
    const params = new HttpParams().set('range', range);

    const url = this.apiUrl + 'preconfigured';
    return this.http.get<TimeSeriesResult[]>(url, { params });
  }
}
