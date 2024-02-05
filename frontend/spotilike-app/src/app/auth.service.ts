import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  signUp(data: { username: string, password: string, email: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/sign`, data);
  }

  signIn(data: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/auth`, data);
  }

  getAlbums() : Observable<any>{
    return this.http.get(`${this.apiUrl}/albums`);
  }

  searchItems(q:string, type:string) : Observable<any>{
      const url = `${this.apiUrl}/search?q=${q}&type=${type}`;
      return this.http.get(url);
  }

  getAlbumById(id:string) : Observable<any>{
    const url = `${this.apiUrl}/albums/${id}`;
    return this.http.get(url); 
  }

  getArtistById(id:string) : Observable<any>{
    const url = `${this.apiUrl}/artist/${id}`;
    return this.http.get(url); 
  }
}
