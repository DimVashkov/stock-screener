import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '../app-config.service';

@Injectable({
  providedIn: 'root'
})
export class YahooApiService {
  interestingStocks: string[] = [];

  constructor(private http: HttpClient, private config: AppConfigService) { }

  load(): void {
    const headers = new HttpHeaders({ 'x-api-key': this.config.yahooApiKey });
    this.http
      .get<any>(`${this.config.yahooApiUrl}/v1/finance/trending/us`, { headers: headers })
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
