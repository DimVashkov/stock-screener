import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { StockNewsComponent } from './components/stock-news/stock-news.component';
import { StockRecommendationComponent } from './components/stock-recommendation/stock-recommendation.component';
import { HomeComponent } from './home.component';
import { NewsApiService } from 'src/app/core/services/http/news-api.service';
import { AlphaApiService } from 'src/app/core/services/http/api.service';
import { FormsModule } from '@angular/forms';
import { YahooApiService } from 'src/app/core/services/http/yahoo-api.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { StockNewsArticleComponent } from './components/stock-news-article/stock-news-article.component';



@NgModule({
  declarations: [
    StockListComponent,
    StockDetailsComponent,
    StockNewsComponent,
    StockRecommendationComponent,
    HomeComponent,
    StockNewsArticleComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    NewsApiService,
    AlphaApiService,
    YahooApiService
  ]
})
export class HomeModule { }
