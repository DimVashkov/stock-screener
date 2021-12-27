import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsArticle } from 'src/app/shared/interfaces/news-article';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  newsArticleStorage: NewsArticle[] = [];

  constructor(private http: HttpClient) { }

  getNewsJSON(): void {
    this.http
      .get<any>("https://api.polygon.io/v2/reference/news?limit=10&apiKey=RHD6yE3sVc36YIh4BCxW1JTUSIxESs5R")
      .subscribe(data => {
        for (let i = 0; i < data.count; i++) {
          this.newsArticleStorage.push(<NewsArticle>data.results[i])
        }
      });
  }

  getNewsArray(): NewsArticle[] {
    if (this.newsArticleStorage.length != 0) return this.newsArticleStorage;
    this.getNewsJSON();
    return this.newsArticleStorage;
  }
}
