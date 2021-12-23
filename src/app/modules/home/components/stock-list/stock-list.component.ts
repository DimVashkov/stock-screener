import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ApiService} from '../../../../core/http/api.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  @ViewChild('stockInput') stockInput: ElementRef | undefined;
  stocks: string[] = ['AAPL', 'TSLA', 'MSFT', 'NVDA', 'IBM'];

  @Output() stockSelectedEvent = new EventEmitter<string>();
  constructor(private api: ApiService) { }

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

  sendSelectedStock(stock: string) {
    console.log('sending stock');
    const stockData = this.api.getStockTickerData(stock);
    console.log(stockData);
    this.stockSelectedEvent.emit(stockData);
  }
}
