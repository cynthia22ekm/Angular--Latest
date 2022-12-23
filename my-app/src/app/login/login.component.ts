import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

//https://stackoverflow.com/questions/14627399/setting-authorization-header-of-httpclient
//Create a login form
//create a login service with basic authentication(with custom user details service and also py passing directly
//username and password in security conffiguration file)
//utilise the service
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginService: LoginService) {}

  submit() {
    this.loginService.onLoginSubmit(this.loginForm.value).subscribe({
      next: (data) => console.log('Data is', data),
      error: (error) => console.log('Error is ', error),
    });
  }

  ngOnInit(): void {}
}
