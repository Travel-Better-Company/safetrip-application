// activities.model.ts

import { Itineraries } from './itineraries.model';

export interface Activities {
  name: string;
  iniDate: string;
  startTime: string;
  endTime: string;
  id_itinerary: number;
}