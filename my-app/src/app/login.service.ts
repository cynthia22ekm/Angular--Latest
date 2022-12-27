import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//https://www.javainuse.com/spring/ang7-basic-interceptor
@Injectable({ providedIn: 'root' })
export class LoginService {
  baseURL: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  onLoginSubmit(data: any) {
    var encodedAuth = window.btoa(data.username + ':' + data.password);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + encodedAuth,
      }),
    };

    const body = JSON.stringify(data);

    return this.http.post(this.baseURL + 'User/Login', body, httpOptions);
  }
}
