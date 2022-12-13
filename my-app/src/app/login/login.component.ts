import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private loginService: LoginService) {}

  getInputUsername(inputUsername: String) {
    console.log('Get input text', inputUsername);
  }

  getInputPassword(inputPassword: String) {
    console.log('Password is', inputPassword);
  }

  submit(data: any) {
    this.loginService.onLoginSubmit(data);
  }

  ngOnInit(): void {}
}
