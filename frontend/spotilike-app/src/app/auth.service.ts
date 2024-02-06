import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  signUp(data: {
    username: string;
    password: string;
    email: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/sign`, data);
  }

  signIn(data: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/auth`, data);
  }

  getAlbums(): Observable<any> {
    return this.http.get(`${this.apiUrl}/albums`);
  }

  generateSpotifyToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}/spotify/token/generate`);
  }

  searchItems(q: string, type: string): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = token
      ? new HttpHeaders({
        Authorization: `Bearer ${token}`,
      })
      : undefined;

    const url = `${this.apiUrl}/search?q=${q}&type=${type}`;
    return this.http.get(url, { headers });
  }

  getAlbumById(id: string): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = token
      ? new HttpHeaders({
        Authorization: `Bearer ${token}`,
      })
      : undefined;

    const url = `${this.apiUrl}/albums/${id}`;
    return this.http.get(url, { headers });
  }

  getAlbumTracks(id:string): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = token
      ? new HttpHeaders({
        Authorization: `Bearer ${token}`,
      })
      : undefined;

    const url = `${this.apiUrl}/albums/${id}/tracks`;
    return this.http.get(url, { headers });
  }

  getArtistById(id: string): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = token
      ? new HttpHeaders({
        Authorization: `Bearer ${token}`,
      })
      : undefined;

    const url = `${this.apiUrl}/artist/${id}`;
    return this.http.get(url, { headers });
  }

  getArtistAlbums(id:string): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = token
      ? new HttpHeaders({
        Authorization: `Bearer ${token}`,
      })
      : undefined;

    const url = `${this.apiUrl}/artist/${id}/albums`;

    return this.http.get(url, { headers });
  }
}
