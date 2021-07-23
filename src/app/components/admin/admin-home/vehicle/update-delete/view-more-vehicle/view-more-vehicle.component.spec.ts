import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoreVehicleComponent } from './view-more-vehicle.component';

describe('ViewMoreVehicleComponent', () => {
  let component: ViewMoreVehicleComponent;
  let fixture: ComponentFixture<ViewMoreVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMoreVehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMoreVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
