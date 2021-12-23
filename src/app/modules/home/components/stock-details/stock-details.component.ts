import { Component, Input, OnInit } from '@angular/core';
import { Stock } from 'src/app/shared/models/stock.model';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss']
})
export class StockDetailsComponent implements OnInit {
  @Input() stock: Stock | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
