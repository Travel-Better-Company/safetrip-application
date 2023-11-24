import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightsResponse } from '../models/flight-response.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private apiUrl = 'http://your-api-url/api/v1/flights';

  constructor(private http: HttpClient) { }

  getFlightById(flightId: number): Observable<FlightsResponse> {
    return this.http.get<FlightsResponse>(`${this.apiUrl}/${flightId}`);
  }

  getFlightsByDepartureCityId(departureCityId: number): Observable<FlightsResponse[]> {
    return this.http.get<FlightsResponse[]>(`${this.apiUrl}/byDepartureCity/${departureCityId}`);
  }

  getFlightsByDepartureAndArrivalCityIds(departureCityId: number, arrivalCityId: number): Observable<FlightsResponse[]> {
    return this.http.get<FlightsResponse[]>(`${this.apiUrl}/byDepartureAndArrivalCity/${departureCityId}/${arrivalCityId}`);
  }
}
