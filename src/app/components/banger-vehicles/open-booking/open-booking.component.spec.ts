import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenBookingComponent } from './open-booking.component';

describe('OpenBookingComponent', () => {
  let component: OpenBookingComponent;
  let fixture: ComponentFixture<OpenBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
