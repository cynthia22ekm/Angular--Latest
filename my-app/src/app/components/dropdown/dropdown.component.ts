import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
export type DropdownComponentProps = {
  drodownText: string;
};

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit, DropdownComponentProps {
  @Input() openPopup: boolean = false;
  @Input() drodownText: string = '';
  @Output() dropDownBtnClickEmiter = new EventEmitter();

  btnClickHanlder() {
    this.dropDownBtnClickEmiter.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
