import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { StockNewsComponent } from './components/stock-news/stock-news.component';
import { StockRecommendationComponent } from './components/stock-recommendation/stock-recommendation.component';
import { HomeComponent } from './home.component';
import { NewsApiService } from 'src/app/core/http/news-api.service';
import { AlphaApiService } from 'src/app/core/http/api.service';



@NgModule({
  declarations: [
    StockListComponent,
    StockDetailsComponent,
    StockNewsComponent,
    StockRecommendationComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [
    NewsApiService,
    AlphaApiService
  ]
})
export class HomeModule { }
