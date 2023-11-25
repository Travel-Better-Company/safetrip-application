import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itineraries } from '../models/Itineraries';

@Injectable({
  providedIn: 'root'
})
export class ItinerariesService {
  private baseURL: string = 'http://localhost:8080/api/v1/itineraries';
  constructor(private http: HttpClient) { }
  getAllItineraries(accountId:number):Itineraries[]{

  }
}
