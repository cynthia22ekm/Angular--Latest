import { Component, OnInit, Input } from '@angular/core';

export type IconComponentProps = {
  Icon: string;
};

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent implements OnInit, IconComponentProps {
  @Input() Icon = '';

  constructor() {}

  ngOnInit(): void {}
}
