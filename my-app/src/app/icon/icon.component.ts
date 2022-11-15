import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export type IconComponentProps = {
  iconLabel: string;
};

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent implements OnInit, IconComponentProps {
  @Input() iconLabel = '';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry
      .addSvgIcon(
        'banana',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          'assets/imgs/banana.svg'
        )
      )
      .addSvgIcon(
        'down-arrow',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          'assets/imgs/down-arrow.svg'
        )
      );
  }

  ngOnInit(): void {}
}
