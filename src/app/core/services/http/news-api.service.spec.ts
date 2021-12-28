import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { NewsApiService } from './news-api.service';

describe('NewsApiService', () => {
  let service: NewsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(NewsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have 0 results at first', () => {
    expect(service.newsArticles.length).toBe(0);
  })
});
