import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stock } from 'src/app/shared/interfaces/stock';
import { ApiService} from '../../../../core/http/api.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  @ViewChild('stockInput') stockInput: ElementRef | undefined;
  stockTickers: Stock[] = [];
  selectedStock: Stock | undefined;

  constructor(private api: ApiService) { }

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

 async selectStock(stock: Stock) {
   this.selectedStock = stock;
   //this.stockSelectedEvent.emit(this.api.getStockTickerData(stockTicker));
}

  // getStockData() {
  //   console.log("Started");
  //   this.stocksFullData = this.api.getStockData(this.stockTickers);
  // }
}
