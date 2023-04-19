import { Component, OnInit } from '@angular/core';
import { forgotpasswordService } from '../../forgot-password.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotpasswordComponent implements OnInit {
  email: String = '';
  emailGenerated: boolean = false;
  constructor(private service: forgotpasswordService) {}

  getToken() {
    this.service.onForgotPassword(this.email).subscribe({
      next: (data: Object) => {
        console.log('Data is ' + JSON.parse(JSON.stringify(data)));
      },
    });
  }

  ngOnInit(): void {}
}
