import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { YahooApiService } from './yahoo-api.service';

describe('YahooApiService', () => {
  let service: YahooApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(YahooApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
