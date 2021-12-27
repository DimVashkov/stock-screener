import { Component, OnInit } from '@angular/core';
import { YahooApiService } from 'src/app/core/http/yahoo-api.service';

@Component({
  selector: 'app-stock-recommendation',
  templateUrl: './stock-recommendation.component.html',
  styleUrls: ['./stock-recommendation.component.scss']
})
export class StockRecommendationComponent implements OnInit {
  interestingStockTickers: string[] = [];

  constructor(private yahooApi: YahooApiService) { }

  ngOnInit(): void {
    this.interestingStockTickers = this.yahooApi.getInterestingStockTickersArray();
  }

}
