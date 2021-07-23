import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangerVehiclesComponent } from './banger-vehicles.component';

describe('BangerVehiclesComponent', () => {
  let component: BangerVehiclesComponent;
  let fixture: ComponentFixture<BangerVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BangerVehiclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BangerVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
