import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-textdropdown',
  templateUrl: './textdropdown.component.html',
  styleUrls: ['./textdropdown.component.scss'],
})
export class TextdropdownComponent {
  @Input() parameters: string[] = [];
  @Output() dropDownLinkClick = new EventEmitter();
  dropDwnContVisibility: string = '';

  toggleDropDwn(event: any) {
    this.dropDwnContVisibility =
      event.srcElement.nextElementSibling.style['visibility'];

    event.srcElement.nextElementSibling.style['visibility'] =
      this.dropDwnContVisibility == 'visible' ? 'hidden' : 'visible';
    this.dropDownLinkClick.emit();
  }

  selectMappingParameter = (event: MouseEvent) => {
    (
      event.target as HTMLDivElement
    ).parentElement!.previousElementSibling!.previousElementSibling!.setAttribute(
      'value',
      (event.target as HTMLDivElement).innerText
    );

    (event.target as HTMLDivElement).parentElement!.style['visibility'] =
      'hidden';
  };
  displayInputText = (event: any) => {
    event.srcElement.setAttribute(
      'value',
      (event.target as HTMLInputElement).value
    );
  };
}
