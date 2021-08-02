import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendRequestedBookingsComponent } from './extend-requested-bookings.component';

describe('ExtendRequestedBookingsComponent', () => {
  let component: ExtendRequestedBookingsComponent;
  let fixture: ComponentFixture<ExtendRequestedBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendRequestedBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendRequestedBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
