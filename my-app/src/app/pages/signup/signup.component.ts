import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignUpService } from '../../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
  });

  signUpMessage: String = '';

  constructor(private signUpService: SignUpService) {}

  ngOnInit(): void {}

  submit() {
    this.signUpService.onSignUp(this.signupForm.value).subscribe({
      next: (data: Object) => (this.signUpMessage = data.toString()),
    });

    console.log('Sign Up Messsage is ', this.signUpMessage);
  }

  enterUserId() {}

  enterFirstName() {}

  enterLastName() {}

  enterEmail() {}

  enterPhone() {}

  enterUserName() {}

  enterPassword() {}
}
