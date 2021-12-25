import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { NewsArticle } from 'src/app/shared/interfaces/news-article';

@Component({
  selector: 'app-stock-news',
  templateUrl: './stock-news.component.html',
  styleUrls: ['./stock-news.component.scss']
})
export class StockNewsComponent implements OnInit {
  news!: NewsArticle[];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.news = this.api.getNewsArray();
  }

}
