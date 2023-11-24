import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogoutResponse } from '../models/logout-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logoutUrl = '/logout'; // URL de tu backend para logout

  constructor(private http: HttpClient) {}

  logout(secureLogout: boolean): Observable<LogoutResponse> {
    return this.http.post<LogoutResponse>(this.logoutUrl, { secureLogout });
  }
}
