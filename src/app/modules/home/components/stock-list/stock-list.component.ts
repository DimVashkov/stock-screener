import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Stock } from 'src/app/shared/interfaces/stock';
import { AlphaApiService} from '../../../../core/http/api.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  @ViewChild('stockInput') stockInput: ElementRef | undefined;
  stockTickers: Stock[] = [];
  selectedStock: Stock | undefined;

  constructor(private api: AlphaApiService) { }

  ngOnInit(): void {
  }
  addStockTicker(ticker: string) {
    if (ticker === '') return;

    ticker = ticker.toUpperCase();
    this.api.getStockTickerData(ticker);
    this.stockTickers = this.api.getStocksStorage();
    this.clearStockInput();
  }

  clearStockInput(): void {
    if (this.stockInput != undefined) {
      this.stockInput.nativeElement.value = '';
    }
  }

  selectStock(stock: Stock) {
    this.selectedStock = stock;
  }
}
