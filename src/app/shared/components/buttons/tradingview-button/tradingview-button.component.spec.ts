import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingviewButtonComponent } from './tradingview-button.component';

describe('TradingviewButtonComponent', () => {
  let component: TradingviewButtonComponent;
  let fixture: ComponentFixture<TradingviewButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingviewButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingviewButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
