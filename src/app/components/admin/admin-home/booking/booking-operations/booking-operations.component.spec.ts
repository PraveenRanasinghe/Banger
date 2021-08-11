import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingOperationsComponent } from './booking-operations.component';

describe('BookingOperationsComponent', () => {
  let component: BookingOperationsComponent;
  let fixture: ComponentFixture<BookingOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
