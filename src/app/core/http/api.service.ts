import { Injectable } from '@angular/core';
import { Stock } from '../../shared/interfaces/stock';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlphaApiService {
  stocksStorage: Stock[] = [];

  constructor(private http: HttpClient) { }

  containsStockTicker(ticker: string): boolean {
    for (let stock of this.stocksStorage) {
      if (stock.Symbol === ticker) {
        return true;
      }
    }
    return false;
  }

  getStockTickerData(ticker: string): void {
    if (this.containsStockTicker(ticker)) return;

    this.http
      .get<Stock>(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=4UL18G30I6HH4G3C`)
      .subscribe(stock => {
        if (this.isEmptyObject(stock)) return;
        this.stocksStorage.push(stock);
      });
  }

  getStocksStorage(): Stock[] {
    return this.stocksStorage;
  }

  isEmptyObject(obj: any) {
    return (obj && (Object.keys(obj).length === 0));
  }
}
