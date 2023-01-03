import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SignUpService {
  baseURL: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  onSignUp(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    const body = JSON.stringify(data);

    return this.http.post(this.baseURL + 'User/CreateUser', body, httpOptions);
  }
}
