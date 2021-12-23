import { Injectable } from '@angular/core';
import {Stock} from '../../shared/interfaces/stock';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  stocksStorage: Stock[] = [];
  constructor(private http: HttpClient) { }

getStockTickerData(ticker: string): Stock | undefined {
    for (let stock of this.stocksStorage) {
      if (stock.Symbol === ticker){
        return stock;
      }
    }
    this.http.get<Stock>(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=4UL18G30I6HH4G3C`)
      .subscribe(stock => {
        this.stocksStorage.push(stock);
        return stock;
      });
    return undefined;
  }

  // ! Works but FREE API doesn't allow number of calls
  // getStockTickerData(ticker: string): Observable<Stock> {
  //   return this.http.get<Stock>(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=4UL18G30I6HH4G3C`)
  // }

  // getStockData(stockTickers: string[]): any {
  //   for (let stockTicker of stockTickers) {
  //     this.getStockTickerData(stockTicker).subscribe(data => {
  //       this.stocks.push(data);
  //     })
  //   }
  //   console.log(this.stocks);
  //   return this.stocks;
  // }
}
