import { DataPoint } from './data-point';

export interface TimeSeriesResult {
  displayName: string;
  dataPoints: DataPoint[];
}
