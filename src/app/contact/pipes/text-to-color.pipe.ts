import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textToColor'
})
export class TextToColorPipe implements PipeTransform {

  defaultColor = '#673AB7'
  colors = {
    'a':'#F44336',
    'b':'#E91E63',
    'c':'#9C27B0',
    'd':'#673AB7',
    'e':'#3F51B5',
    'f':'#2196F3',
    'g':'#03A9F4',
    'h':'#00BCD4',
    'i':'#009688',
    'j':'#4CAF50',
    'k':'#8BC34A',
    'l':'#CDDC39',
    'm':'#FFEB3B',
    'n':'#FFC107',
    'o':'#FF9800',
    'p':'#FF5722',
    'q':'#795548',
    'r':'#9E9E9E',
    's':'#607D8B',
    't':'#009688',
    'u':'#673AB7',
    'v':'#F44336',
    'w':'#00BCD4',
    'x':'#9C27B0',
    'y':'#FF5722',
    'z':'#FFEB3B',
  };
  transform(value: any, args?: any): any {
    if(value == null || value == '') {
      return this.defaultColor;
    }
    const firstChar = value.charAt(0).toLowerCase();
    return this.colors[firstChar];
  }

}
