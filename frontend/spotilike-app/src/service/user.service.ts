import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

interface IUser {
  username: string | null | undefined,
  email: string | null | undefined,
  password: string | null | undefined,
  id: number | null | undefined
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/user';

  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<any> {
    const token = localStorage.getItem("token");

    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get(`${this.apiUrl}/info`,{ headers: httpHeaders });
  }

  updateUserInfo({username, email, password, id}: IUser): Observable<any> {
    const token = localStorage.getItem("token");

    let httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    });

    return this.http.put(`${this.apiUrl}/${id}`, {
      username: username,
      email:  email,
      password: password
    }, {
      headers: httpHeaders,
    });
  }

  deleteProfil(id: number) {
    const token = localStorage.getItem("token");

    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.delete(`${this.apiUrl}/${id}`, { headers: httpHeaders });
  }
}
