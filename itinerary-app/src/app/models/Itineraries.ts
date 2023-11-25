// itineraries.model.ts
import { Users } from './users.model';
import { Cities } from './cities.model';

export interface Itineraries {
  name: string;
  ini_date: string;
  end_date: string;
  userId: number;
  cityId: number;
}