import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css'],
})
export class DropdownItemComponent implements OnInit {
  @Input() itemName: string = '';
  @Output() getDropDownTextEmitter = new EventEmitter<string>();

  clickDropDownItemHandler(event: Event) {
    this.getDropDownTextEmitter.emit((<HTMLDivElement>event.target).innerText);
  }

  constructor() {}

  ngOnInit(): void {}
}
