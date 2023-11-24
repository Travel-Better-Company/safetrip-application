import { CityResponse } from './city-response.model';

export interface FlightsResponse {
  id: number;
  departureCity: string;
  arrivalCity: string;
  startDate: Date;
  endDate: Date;
}
