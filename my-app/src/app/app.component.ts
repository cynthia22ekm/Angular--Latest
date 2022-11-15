import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  show: boolean = true;

  constructor() {}

  btnClickHanlder() {
    console.log('Button clicked');
  }

  getInputText(inputText: string) {
    console.log(inputText);
  }
}
