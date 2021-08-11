import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcceptedBookingsComponent } from './view-accepted-bookings.component';

describe('ViewAcceptedBookingsComponent', () => {
  let component: ViewAcceptedBookingsComponent;
  let fixture: ComponentFixture<ViewAcceptedBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAcceptedBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAcceptedBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
