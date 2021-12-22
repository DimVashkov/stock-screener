import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpocalendarComponent } from './ipocalendar.component';

describe('IpocalendarComponent', () => {
  let component: IpocalendarComponent;
  let fixture: ComponentFixture<IpocalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpocalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpocalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
