import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApplicationInitStatus, APP_INITIALIZER } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppConfigService } from 'src/app/core/services/app-config.service';

import { StockRecommendationComponent } from './stock-recommendation.component';

describe('StockRecommendationComponent', () => {
  let component: StockRecommendationComponent;
  let fixture: ComponentFixture<StockRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockRecommendationComponent],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
