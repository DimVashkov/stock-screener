import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AlphaApiService } from './api.service';

describe('AlphaApiService', () => {
  let service: AlphaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AlphaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check for null object', () => {
    expect(service.isEmptyObject({})).toBeTruthy();
  })
});
