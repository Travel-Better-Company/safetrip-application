import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activities } from '../models/Activities';
import { Observable } from 'rxjs';
import { ActivitiesResponse } from '../models/ActivitesResponse';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private baseURL: string = 'http://localhost:8080/api/v1/activities';
  //Las funciones deben tener la misma estructura o similar a nuestro controller de nuestro backend
  constructor(private http:HttpClient) { }
  
  createActivity(resource: Activities):Observable<ActivitiesResponse>{
    return this.http.post<ActivitiesResponse>(this.baseURL,resource);
  }
  updateActivity(activityId: number, activity:Activities): Observable<ActivitiesResponse>{
    const url = `${this.baseURL}/${activityId}`;
    return this.http.put<ActivitiesResponse>(url,activity);
  }
  deleteActivty(activityId: number){
    const url = `${this.baseURL}/${activityId}`;
    return this.http.delete(url);
  }
  getActivitiesByItineraryId(itineraryId: number): Observable<ActivitiesResponse[]>{
    const url = `${this.baseURL}/${itineraryId}`;
    return this.http.get<ActivitiesResponse[]>(url);

  }
  getAllActivities():Observable<ActivitiesResponse[]>{
    return this.http.get<ActivitiesResponse[]>(this.baseURL);
  }
}
