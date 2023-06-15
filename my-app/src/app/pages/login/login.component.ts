import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
import { ItemCountService } from 'src/app/datastore/itemcount';
import { Subscription } from 'rxjs';

//https://stackoverflow.com/questions/14627399/setting-authorization-header-of-httpclient
//Create a login form
//create a login service with basic authentication(with custom user details service and also py passing directly
//username and password in security conffiguration file)
//utilise the service

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService, ItemCountService],
})
export class LoginComponent implements OnInit {
  subscription: Subscription | undefined;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  loginstatus: Boolean = false;
  invalidLogin: Boolean = false;
  emptyUsername: Boolean = false;
  emptyPassword: Boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private itemCountService: ItemCountService
  ) {}

  enterUsername() {
    if (this.loginForm.value.username?.length != 0) this.emptyUsername = false;
  }

  enterPassword() {
    if (this.loginForm.value.password?.length != 0) this.emptyPassword = false;
  }
  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }

  navigateToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  submit() {
    this.invalidLogin = false;
    if (this.loginForm.value.username?.length == 0) this.emptyUsername = true;
    if (this.loginForm.value.password?.length == 0) this.emptyPassword = true;

    this.loginService.onLoginSubmit(this.loginForm.value).subscribe({
      next: (data: Object) => {
        this.loginstatus = JSON.stringify(data).includes('true');
        if (this.loginstatus) this.router.navigate(['/home']);
      },
      error: (error) => {
        if (
          error.status != 200 &&
          this.emptyUsername == false &&
          this.emptyPassword == false
        ) {
          this.loginstatus = false;
          this.invalidLogin = true;
        }
      },
    });
  }

  ngOnInit(): void {
    this.subscription = this.itemCountService
      .getItemCount()
      .subscribe((count) =>
        console.log('The count value is ' + count.itemCount)
      );
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
