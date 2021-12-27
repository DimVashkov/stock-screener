import { Injectable } from '@angular/core';
import { Stock } from '../../shared/interfaces/stock';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsArticle } from 'src/app/shared/interfaces/news-article';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  stocksStorage: Stock[] = [];
  newsArticleStorage: NewsArticle[] = [];
  constructor(private http: HttpClient) { }

  containsStockTicker(ticker: string): boolean {
    for (let stock of this.stocksStorage) {
      if (stock.Symbol === ticker) {
        return true;
      }
    }
    return false;
  }

  getStockTickerData(ticker: string): any {
    if (this.containsStockTicker(ticker)) return;

    this.http.get<Stock>(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=4UL18G30I6HH4G3C`)
      .subscribe(stock => {
        if (this.isEmptyObject(stock)) return;
        this.stocksStorage.push(stock);
      });
  }
  getNewsJSON(): void {
    this.http
    .get<any>("https://api.polygon.io/v2/reference/news?limit=10&apiKey=RHD6yE3sVc36YIh4BCxW1JTUSIxESs5R")
    .subscribe(data => {
      for (let i = 0; i < data.count; i++) {
        this.newsArticleStorage.push(<NewsArticle>data.results[i])
      }
    });
  }

  getStocksStorage(): Stock[] {
    return this.stocksStorage;
  }

  getNewsArray(): NewsArticle[] {
    if (this.newsArticleStorage.length != 0) return this.newsArticleStorage;
    this.getNewsJSON();
    return this.newsArticleStorage;
  }

  isEmptyObject(obj: any) {
    return (obj && (Object.keys(obj).length === 0));
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
