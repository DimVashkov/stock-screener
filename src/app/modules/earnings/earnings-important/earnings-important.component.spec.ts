import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningsImportantComponent } from './earnings-important.component';

describe('EarningsImportantComponent', () => {
  let component: EarningsImportantComponent;
  let fixture: ComponentFixture<EarningsImportantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarningsImportantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarningsImportantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
