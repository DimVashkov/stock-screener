import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YahooApiService {
  interestingStocks: string[] = [];

  constructor(private http: HttpClient) { }

  load(): void {
    const headers = new HttpHeaders({ 'x-api-key': 'rpBh3omYZf4l3bBIJN55HzjEcZzV0Fl1XDDdas1e' });
    this.http
      .get<any>("https://yfapi.net/v1/finance/trending/us", { headers: headers })
      .subscribe(data => {
        for (let quote of data.finance.result[0].quotes) {
          this.interestingStocks.push(quote.symbol);
        }
      });
  }

  get(): string[] {
    if (this.interestingStocks.length != 0) return this.interestingStocks;
    this.load();
    return this.interestingStocks;
  }
}
