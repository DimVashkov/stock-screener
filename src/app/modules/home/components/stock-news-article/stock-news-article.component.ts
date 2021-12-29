import { Component, Input, OnInit } from '@angular/core';
import { NewsArticle } from 'src/app/shared/interfaces/news-article';

@Component({
  // Otherwise I have <app-stock-news-article> and that messes up my CSS. This is a bad practice, ask for alternatives.
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[app-stock-news-article]',
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
