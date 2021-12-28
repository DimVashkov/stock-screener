import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsArticle } from 'src/app/shared/interfaces/news-article';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  newsArticles: NewsArticle[] = [];

  constructor(private http: HttpClient) { }

  load(): void {
    this.http
      .get<any>("https://api.polygon.io/v2/reference/news?limit=10&apiKey=RHD6yE3sVc36YIh4BCxW1JTUSIxESs5R")
      .subscribe(data => {
        for (let i = 0; i < data.count; i++) {
          this.newsArticles.push(<NewsArticle>data.results[i])
        }
      });
  }

  get(): NewsArticle[] {
    if (this.newsArticles.length != 0) return this.newsArticles;
    this.load();
    return this.newsArticles;
  }
}
