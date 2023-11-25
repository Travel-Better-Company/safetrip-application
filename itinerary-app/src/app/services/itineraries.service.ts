import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
  private token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqdWFuaXRvQGdtYWlsLmNvbSIsImlhdCI6MTcwMDg3ODkxNCwiZXhwIjoxNzAwODgwMzU0fQ.CwM70axi_Hl0D6sCn_GF_n0Go11xoKhsRn1lfC3IOe0'; 
  constructor(private http:HttpClient){}
  //Las funciones deben tener la misma estructura o similar a nuestro controller de nuestro backend
  createItinerary(resource:Itineraries): Observable<ItinerariesResponse[]>{
    return this.http.post<ItinerariesResponse[]>(this.baseURL,resource);
  }

  getAllItineraries():Observable<ItinerariesResponse[]>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<ItinerariesResponse[]>(this.baseURL, {headers});
  }
  updateItinerary(itineraryId:number, resource: Itineraries):Observable<ItinerariesResponse>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    const url = `${this.baseURL}/update/${itineraryId}`;
    return this.http.put<ItinerariesResponse>(url,resource,{headers});
  }
  deleteItinerary(itineraryId:number){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    const url = `${this.baseURL}/delete/${itineraryId}`;
    return this.http.delete(url,{headers});
  }
  findItinerariesByCity_Location(location:string):Observable<ItinerariesResponse[]>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    const url = `${this.baseURL}/find/${location}`
    return this.http.get<ItinerariesResponse[]>(url,{headers});
  }
  share_itinerary(resource: Sharing): Observable<Sharing>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    const url = `${this.baseURL}/share`
    return this.http.post<Sharing>(url,resource,{headers});
  }
  

}
