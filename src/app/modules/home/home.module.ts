import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { StockNewsComponent } from './components/stock-news/stock-news.component';
import { StockRecommendationComponent } from './components/stock-recommendation/stock-recommendation.component';
import { HomeComponent } from './home.component';



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
  ]
})
export class HomeModule { }
