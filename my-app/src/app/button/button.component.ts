import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';

type variant = 'primary' | 'submit' | 'normal';
export type ButtonProps = {
  btnType: variant;
  btnSize: string;
  btnText: string;
  btnWidth: string;
  btnHeight: string;
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
  @Input() btnWidth: string = '';
  @Input() btnHeight: string = '';
  @Input() iconLabel: string = '';
  @Input() isIconPresent: boolean = false;
  @Output() buttonClickEmitter = new EventEmitter<void>();

  buttonClickHandler() {
    this.buttonClickEmitter.emit();
  }

  getbtnSize() {
    return;
    this.btnSize;
  }

  constructor() {}

  ngOnInit(): void {}
}
