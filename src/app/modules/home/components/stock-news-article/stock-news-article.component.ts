import { Component, Input, OnInit } from '@angular/core';
import { NewsArticle } from 'src/app/shared/interfaces/news-article';

@Component({
  selector: 'app-stock-news-article',
  templateUrl: './stock-news-article.component.html',
  styleUrls: ['./stock-news-article.component.scss']
})
export class StockNewsArticleComponent implements OnInit {

  @Input()
  article!: NewsArticle;

  constructor() { }

  ngOnInit(): void {
  }

}
