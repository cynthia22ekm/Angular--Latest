import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class forgotpasswordService {
  baseURL: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  onForgotPassword(data: String) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    console.log('Data is ' + data);
    const body = JSON.stringify({ email: data });
    console.log('Body is ' + body);
    return this.http.post(
      this.baseURL + 'Forgot-Password/CreateToken',
      body,
      httpOptions
    );
  }
}
