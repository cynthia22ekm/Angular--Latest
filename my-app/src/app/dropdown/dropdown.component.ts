import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
export type DropdownComponentProps = {
  drodownText: string;
};

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit, DropdownComponentProps {
  openPopup: boolean = false;
  @Input() drodownText: string = ';';
  @Input() Items: [{ name: string; quantity: number; price: number }] = [
    { name: '', quantity: 0, price: 0 },
  ];
  @Output() getDropDownTextEmitter = new EventEmitter<string>();

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
    this.openPopup = true;
  }

  clickDropDownItemHandler(event: Event) {
    this.drodownText = (<HTMLDivElement>event.target).innerText;
    this.openPopup = false;
    this.getDropDownTextEmitter.emit((<HTMLDivElement>event.target).innerText);
  }
  constructor() {
    console.log(this.Items);
  }

  ngOnInit(): void {
    console.log(this.Items);
  }
}
