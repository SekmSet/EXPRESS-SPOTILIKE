import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/user';

  constructor(private http: HttpClient) { }

  signUp(data: { username: string, password: string, email: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign`, data);
  }

  signIn(data: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth`, data);
  }
}
