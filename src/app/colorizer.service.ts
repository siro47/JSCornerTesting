import { Injectable } from '@angular/core';

@Injectable()
export class ColorizerService {

  private palettes = [
    {standard: '#3F51B5', dark: '#303F9F', light: '#C5CAE9'},
    {standard: '#E5000B', dark: '#992222', light: '#F2797E'},
    {standard: '#E5A600', dark: '#A87900', light: '#F2EBDA'},
    {standard: '#5CE500', dark: '#43A800', light: '#A9F279'},
  ]

  constructor() { }

  getRandomColorPalette() {
    return this.palettes[Math.floor(Math.random()*this.palettes.length)];
  }

}
