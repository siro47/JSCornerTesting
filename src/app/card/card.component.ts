import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {ColorizerService} from "../colorizer.service";

interface CardInfo {
  title: string;
  footer: string;
  extendedInfo: string;
}

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('flipState', [
      state('title', style({
        opacity: 1
      })),
      state('details', style({
        opacity: 1
      })),
      transition('title => details', animate('1000ms ease-in')),
      transition('details => title', animate('1000ms ease-out'))
    ])
  ]
})
export class CardComponent implements OnInit {
  @Input() data: CardInfo;

  private cardStatus = 'main';
  private palette;

  constructor(
    private colorizer: ColorizerService
  ) {
    this.palette = colorizer.getRandomColorPalette();
  }

  ngOnInit() {
  }

  changeState() {
    if (this.cardStatus === 'main') {
      this.cardStatus = 'details';
    } else {
      this.cardStatus = 'main';
    }
  }

  getColor() {
    if (this.cardStatus === 'main') {
      return this.palette.standard;
    } else {
      return this.palette.light;
    }
  }
}
