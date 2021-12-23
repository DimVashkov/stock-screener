import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  @ViewChild('stockInput') stockInput: ElementRef | undefined;
  stocks: string[] = ['AAPL', 'TSLA', 'MSFT', 'NVDA', 'IBM'];

  constructor() { }

  ngOnInit(): void {
  }
  addStockTicker(ticker: string) {
    ticker = ticker.toUpperCase();
    if (ticker != '' && !this.stocks.includes(ticker)) {
      this.stocks.push(ticker);
      this.clearStockInput();
    }
  }

  clearStockInput(): void {
    if (this.stockInput != undefined) {
      this.stockInput.nativeElement.value = '';
    }
  }
}
