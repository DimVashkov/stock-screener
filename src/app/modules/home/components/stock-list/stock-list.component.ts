import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Stock } from 'src/app/shared/interfaces/stock';
import { ApiService} from '../../../../core/http/api.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  @ViewChild('stockInput') stockInput: ElementRef | undefined;
  stockTickers: string[] = ['AAPL', 'TSLA', 'MSFT', 'NVDA', 'IBM'];
  selectedStock: Stock | undefined;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }
  addStockTicker(ticker: string) {
    ticker = ticker.toUpperCase();
    if (ticker != '' && !this.stockTickers.includes(ticker)) {
      this.stockTickers.push(ticker);
      this.clearStockInput();
    }
  }

  clearStockInput(): void {
    if (this.stockInput != undefined) {
      this.stockInput.nativeElement.value = '';
    }
  }

 async selectStock(stockTicker: string) {
   this.selectedStock = await this.api.getStockTickerData(stockTicker);
   //this.stockSelectedEvent.emit(this.api.getStockTickerData(stockTicker));
}

  // getStockData() {
  //   console.log("Started");
  //   this.stocksFullData = this.api.getStockData(this.stockTickers);
  // }
}
