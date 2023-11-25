import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itineraries } from '../models/Itineraries';
import { Observable } from 'rxjs';
import { ItinerariesResponse } from '../models/ItinerariesResponse';
import { Sharing } from '../models/Sharing';
@Injectable({
  providedIn: 'root'
})
export class ItinerariesService {
  private baseURL:string = "http://localhost:8080/api/v1/itineraries";
  constructor(private http:HttpClient){}
  //Las funciones deben tener la misma estructura o similar a nuestro controller de nuestro backend
  createItinerary(resource:Itineraries): Observable<ItinerariesResponse[]>{
    return this.http.post<ItinerariesResponse[]>(this.baseURL,resource);
  }

  getAllItineraries():Observable<ItinerariesResponse[]>{
    return this.http.get<ItinerariesResponse[]>(this.baseURL);
  }
  updateItinerary(itineraryId:number, resource: Itineraries):Observable<ItinerariesResponse>{
    const url = `${this.baseURL}/update/${itineraryId}`;
    return this.http.put<ItinerariesResponse>(url,resource);
  }
  deleteItinerary(itineraryId:number){
    const url = `${this.baseURL}/delete/${itineraryId}`;
    return this.http.delete(url);
  }
  findItinerariesByCity_Location(location:string):Observable<ItinerariesResponse[]>{
    const url = `${this.baseURL}/find/${location}`
    return this.http.get<ItinerariesResponse[]>(url);
  }
  share_itinerary(resource: Sharing): Observable<Sharing>{
    const url = `${this.baseURL}/share`
    return this.http.post<Sharing>(url,resource);
  }
  

}
