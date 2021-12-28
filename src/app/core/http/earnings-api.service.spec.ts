import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { EarningsApiService } from './earnings-api.service';

describe('EarningsApiService', () => {
  let service: EarningsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(EarningsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
