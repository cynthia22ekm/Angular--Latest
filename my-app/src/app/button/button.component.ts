import { Input, Component, OnInit } from '@angular/core';

export type ButtonProps = {
  btnType: string;
  btnColor: string;
};

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit, ButtonProps {
  @Input() btnColor: string = '';

  @Input() btnType: string = '';

  @Input()
  text: string = 'Hi';

  constructor() {}

  ngOnInit(): void {}
}
