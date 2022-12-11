import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ListItem } from 'ng-multiselect-dropdown/multiselect.model';

@Component({
  selector: 'app-dropdown-multiselect',
  templateUrl: './dropdown-multiselect.component.html',
  styleUrls: ['./dropdown-multiselect.component.css'],
})
export class DropdownMultiselectComponent implements OnInit {
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};
  Products = [
    {
      id: 1,
      text: 'Banana',
    },
    {
      id: 2,
      text: 'Apple',
    },
    {
      id: 3,
      text: 'Pinneapple',
    },
  ];

  onItemSelect(data: any) {
    console.log(data);
  }

  constructor() {}

  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
}
