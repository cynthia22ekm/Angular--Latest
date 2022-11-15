import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

export type TextInputComponentProps = {
  textWidth: string;
  textHeight: string;
  iconLabel: string;
};

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent implements OnInit {
  @Output() textInputEmitter = new EventEmitter<string>();
  @Input() textWidth: string = '';
  @Input() textHeight: string = '';
  @Input() iconLabel: string = '';
  enteredText: string = '';

  textInputHandler(event: Event) {
    this.textInputEmitter.emit((<HTMLInputElement>event.target).value);
  }
  clearTextInputHandler() {
    this.enteredText = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
