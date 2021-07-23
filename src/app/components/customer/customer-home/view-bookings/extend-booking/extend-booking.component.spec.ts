import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendBookingComponent } from './extend-booking.component';

describe('ExtendBookingComponent', () => {
  let component: ExtendBookingComponent;
  let fixture: ComponentFixture<ExtendBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
