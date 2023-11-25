// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignupRequestDto } from '../models/signup-request.dto';
import { UserResponseDto } from '../models/user-response.dto';
import { SigninRequestDto } from '../models/signin-request.dto';
import { JwtAuthenticationResponseDto } from '../models/jwt-authentication-response.dto';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  signup(request: SignupRequestDto): Observable<UserResponseDto> {
    return this.http.post<UserResponseDto>(`${this.baseUrl}/api/v1/auth/signup`, request);
  }

  signin(request: SigninRequestDto): Observable<JwtAuthenticationResponseDto> {
    return this.http.post<JwtAuthenticationResponseDto>(`${this.baseUrl}/api/v1/auth/signin`, request);
  }
}