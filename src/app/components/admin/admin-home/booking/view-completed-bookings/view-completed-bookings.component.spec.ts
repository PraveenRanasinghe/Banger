import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompletedBookingsComponent } from './view-completed-bookings.component';

describe('ViewCompletedBookingsComponent', () => {
  let component: ViewCompletedBookingsComponent;
  let fixture: ComponentFixture<ViewCompletedBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCompletedBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCompletedBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
