import { Input, Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

type variant = 'primary' | 'submit' | 'normal';
export type ButtonProps = {
  btnType: variant;
  btnSize: string;
  btnText: string;
  iconLabel: string;
  isIconPresent: boolean;
};

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit, ButtonProps {
  @Input() btnType: variant = 'normal';

  @Input() btnSize: string = '';

  @Input() btnText: string = '';

  @Input() iconLabel: string = '';

  @Input() isIconPresent: boolean = false;

  getbtnSize() {
    return;
    this.btnSize;
  }

  constructor() {}

  ngOnInit(): void {}
}
