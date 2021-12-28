import { Injectable } from '@angular/core';
import { Stock } from '../../../shared/interfaces/stock';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../app-config.service';

@Injectable({
  providedIn: 'root'
})
export class AlphaApiService {
  stocks: Stock[] = [];

  constructor(private http: HttpClient, private config: AppConfigService) { }

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
      .get<Stock>(`${this.config.alphaApiUrl}function=OVERVIEW&symbol=${ticker}&apikey=${this.config.alphaApiKey}`)
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
