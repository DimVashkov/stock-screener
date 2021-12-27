import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';

@Component({
  selector: 'app-stock-recommendation',
  templateUrl: './stock-recommendation.component.html',
  styleUrls: ['./stock-recommendation.component.scss']
})
export class StockRecommendationComponent implements OnInit {
  interestingStockTickers: string[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.interestingStockTickers = this.api.getInterestingStockTickersArray();
  }

}
