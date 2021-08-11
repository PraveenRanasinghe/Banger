import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRejectedBookingsComponent } from './view-rejected-bookings.component';

describe('ViewRejectedBookingsComponent', () => {
  let component: ViewRejectedBookingsComponent;
  let fixture: ComponentFixture<ViewRejectedBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRejectedBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRejectedBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
