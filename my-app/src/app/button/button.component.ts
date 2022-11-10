import { Input, Component, OnInit } from '@angular/core';

type variant = 'primary' | 'submit' | 'normal';
export type ButtonProps = {
  btnType: variant;
  btnSize: string;
  btnText: string;
  svgIcon: string;
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

  @Input() svgIcon: string = '';

  getbtnSize() {
    return;
    this.btnSize;
  }

  constructor() {}

  ngOnInit(): void {}
}
