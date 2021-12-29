import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockNewsArticleComponent } from './stock-news-article.component';

describe('StockNewsArticleComponent', () => {
  let component: StockNewsArticleComponent;
  let fixture: ComponentFixture<StockNewsArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockNewsArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockNewsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
