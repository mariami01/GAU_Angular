import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://ketiketelauri123-001-site1.jtempurl.com/api/account';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }

  register(name: string, email: string, password: string, avatar: string, phoneNumber: string, gender: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, { name, email, password, avatar, phoneNumber, gender });
  }
}
