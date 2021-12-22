import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicIndicatorsComponent } from './economic-indicators.component';

describe('EconomicIndicatorsComponent', () => {
  let component: EconomicIndicatorsComponent;
  let fixture: ComponentFixture<EconomicIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomicIndicatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
