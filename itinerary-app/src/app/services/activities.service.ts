import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activities } from '../models/Activities';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private baseURL: string = 'http://localhost:8080/api/v1/activities';

  constructor(private http:HttpClient) { }
  getAllActivites(): Activities[]{}
}
