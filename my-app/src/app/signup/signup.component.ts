import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    userid: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  submit() {}

  enterUserId() {}

  enterFirstName() {}

  enterLastName() {}

  enterEmail() {}

  enterPhone() {}

  enterUserName() {}

  enterPassword() {}
}
