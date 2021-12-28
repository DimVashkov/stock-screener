import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsArticle } from 'src/app/shared/interfaces/news-article';
import { AppConfigService } from '../app-config.service';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  newsArticles: NewsArticle[] = [];

  constructor(private http: HttpClient, private config: AppConfigService) { }

  load(): void {
    this.http
      .get<any>(`${this.config.polygonApiUrl}/news?limit=10&apiKey=${this.config.polygonApiKey}`)
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
