import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumberCurrency'
})
export class ShortNumberCurrencyPipe implements PipeTransform {
  powers = [
    { key: 'Q', value: Math.pow(10, 15) },
    { key: 'T', value: Math.pow(10, 12) },
    { key: 'B', value: Math.pow(10, 9) },
    { key: 'M', value: Math.pow(10, 6) },
    { key: 'K', value: 1000 }
  ];

  transform(value: string, args?: any): any {
    let x = Number(value);
    if (!this.isValid(x)) return null;

    let abs = Math.abs(x);
    const rounder = Math.pow(10, 1);
    const isNegative = x < 0; // will also work for Negetive numbers
    let key = '';

    for (let i = 0; i < this.powers.length; i++) {
      let reduced = abs / this.powers[i].value;
      reduced = Math.round(reduced * rounder) / rounder;
      if (reduced >= 1) {
        abs = reduced;
        key = this.powers[i].key;
        break;
      }
    }
    return '$'+ (isNegative ? '-' : '') + abs + key;
  }

  isValid(x: number): boolean {
    if (isNaN(x)) return false;
    if (x === null) return false;
    if (x === 0) return false;
    return true;
  }
}
