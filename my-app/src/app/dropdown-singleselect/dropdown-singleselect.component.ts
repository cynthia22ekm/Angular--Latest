import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-singleselect',
  templateUrl: './dropdown-singleselect.component.html',
  styleUrls: ['./dropdown-singleselect.component.css'],
})
export class DropdownSingleselectComponent implements OnInit {
  @Output() dropDownSelectEmitter = new EventEmitter<string>();
  selectedText: string = '';
  defaultPlaceholder: string = 'Select Product...';
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

  dropDownSelectHandler(event: {
    name: string;
    quantity: number;
    price: number;
  }) {
    console.log(event);
    this.dropDownSelectEmitter.emit(event.name);
  }

  constructor() {}

  ngOnInit(): void {}
}
