import { Component, OnInit } from '@angular/core';
import { ChartSeriesSet } from 'src/app/core/models/timeseries/chart-series-set';
import { DataPoint } from 'src/app/core/models/timeseries/data-point';
import { TimeSeriesRange } from 'src/app/core/models/timeseries/time-series-range';
import { TimeSeriesResult } from 'src/app/core/models/timeseries/time-series-result';
import { TimeSeriesService } from 'src/app/core/services/time-series.service';

@Component({
  selector: 'app-measurements-temperatures',
  templateUrl: './measurements-temperatures.component.html',
  styleUrls: ['./measurements-temperatures.component.css']
})
export class MeasurementsTemperaturesComponent implements OnInit {

  chartSeriesSets: ChartSeriesSet[];

  view = [1000, 400];
  xAxisLabel = '';
  yAxisLabel = 'Temperatur';
  legendTitle = 'Legende';

  colorScheme = {
    domain: ['#5AA454', '#E44D25']
  };

  constructor(private timeSeries: TimeSeriesService) { }

  ngOnInit(): void {
    this.timeSeries.getPreconfiguredTimeSeries(TimeSeriesRange.oneMonth).subscribe(
      result => this.setMultiSeries(result),
      error => console.log(error)
    );
  }

  setMultiSeries(timeSeries: TimeSeriesResult[]) {
    const seriesElements: ChartSeriesSet[] = [];

    for (const ts of timeSeries) {
      const seriesElement = new ChartSeriesSet();
      seriesElement.name = ts.displayName;

      for (const dataPoint of ts.dataPoints) {
        seriesElement.series.push({
          name: new Date(dataPoint.timestamp),
          value: dataPoint.value
        });
      }

      seriesElements.push(seriesElement);
    }

    this.chartSeriesSets = seriesElements;
  }

  dateTickFormatting(val: any): string {
    if (val instanceof Date) {
      return (val as Date).toLocaleString('de-DE', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
    }
  }
}
