import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl; // e.g. http://localhost:3000

  constructor(private http: HttpClient) {}

  // Example GET request
  getMessage(): Observable<string> {
    return this.http.get(`${this.apiUrl}/`, { responseType: 'text' });
  }

  // Example POST request
  sendData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/data`, data);
  }

  // Example GET list
  getItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/items`);
  }
}

