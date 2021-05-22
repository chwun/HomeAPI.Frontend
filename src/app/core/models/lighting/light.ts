import { LightState } from './light-state';
import { LightType } from './light-type';

export interface Light {
  id: number;
  name: string;
  type: LightType;
  state: LightState;
}
