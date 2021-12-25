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
  constructor(private http: HttpClient) { }

  async getStockTickerData(ticker: string): Promise<Stock> {
    for (let stock of this.stocksStorage) {
      if (stock.Symbol === ticker) {
        return stock;
      }
    }
    return await this.getStockTickerJSON(ticker)
  }

  async getStockTickerJSON(ticker: String): Promise<any> {
    this.http.get<Stock>(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=4UL18G30I6HH4G3C`)
      .subscribe(stock => {
        this.stocksStorage.push(stock);
        return stock;
      });
  }
  getNewsJSON(): Observable<any> {
    return this.http.get<any>("https://api.polygon.io/v2/reference/news?limit=10&apiKey=RHD6yE3sVc36YIh4BCxW1JTUSIxESs5R");
  }

  getNewsArray(): NewsArticle[] {
    let newsArticles: NewsArticle[] = [];
    this.getNewsJSON().subscribe(data => {
      for (let i = 0; i < data.count; i++) {
        newsArticles.push(<NewsArticle>data.results[i])
      }
    });
    return newsArticles;
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
