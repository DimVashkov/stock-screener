import { Injectable } from '@angular/core';
import { Stock } from '../../shared/interfaces/stock';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlphaApiService {
  stocks: Stock[] = [];

  constructor(private http: HttpClient) { }

  contains(ticker: string): boolean {
    for (let stock of this.stocks) {
      if (stock.Symbol === ticker) {
        return true;
      }
    }
    return false;
  }

  load(ticker: string): void {
    if (this.contains(ticker)) return;

    this.http
      .get<Stock>(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=4UL18G30I6HH4G3C`)
      .subscribe(stock => {
        if (this.isEmptyObject(stock)) return;
        this.stocks.push(stock);
      });
  }

  get(): Stock[] {
    return this.stocks;
  }

  remove(stock: Stock): Stock[] {
    this.stocks.splice(this.stocks.indexOf(stock), 1);
    return this.get();
  }

  isEmptyObject(obj: any) {
    return (obj && (Object.keys(obj).length === 0));
  }
}
