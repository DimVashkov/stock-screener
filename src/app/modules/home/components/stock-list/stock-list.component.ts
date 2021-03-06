import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/shared/interfaces/stock';
import { AlphaApiService} from 'src/app/core/services/http/api.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  stocks: Stock[] = [];
  selectedStock: Stock | undefined;
  stock!: string;

  constructor(private stocks_api: AlphaApiService) { }

  ngOnInit(): void {
    this.stocks = this.stocks_api.get();
  }
  add() {
    if (this.stock === '') return;

    this.stocks_api.load(this.stock.toUpperCase());
    this.stocks = this.stocks_api.get();
    this.stock = '';
  }

  remove(stock: Stock) {
    this.stocks = this.stocks_api.remove(stock);
  }

  selectStock(stock: Stock) {
    this.selectedStock = stock;
  }
}
