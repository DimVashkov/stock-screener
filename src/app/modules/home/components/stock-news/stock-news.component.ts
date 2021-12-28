import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/core/services/http/news-api.service';
import { NewsArticle } from 'src/app/shared/interfaces/news-article';

@Component({
  selector: 'app-stock-news',
  templateUrl: './stock-news.component.html',
  styleUrls: ['./stock-news.component.scss']
})
export class StockNewsComponent implements OnInit {
  news!: NewsArticle[];

  constructor(private newsApi: NewsApiService) { }

  ngOnInit(): void {
    //this.news = this.newsApi.getNewsArray();
  }

}
