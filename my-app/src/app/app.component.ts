import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  show: boolean = true;
  setPopup: boolean = false;
  drodownText: string = 'Products';

  constructor() {}

  Products = [
    {
      name: 'Banana',
      quantity: 10,
      price: 30,
    },
    {
      name: 'Apple',
      quantity: 15,
      price: 20,
    },
    {
      name: 'Pinneapple',
      quantity: 20,
      price: 40,
    },
  ];

  btnClickHanlder() {
    console.log('Button clicked');
  }

  getInputText(inputText: string) {
    console.log(inputText);
  }

  getSelectedText(selectedText: string) {
    console.log(selectedText);
  }

  getSelectedDropText(selectedText: string) {
    this.drodownText = selectedText;
    this.setPopup = false;
  }

  opencloseDropDown() {
    this.setPopup = true;
  }
}
