import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteVehicleComponent } from './update-delete-vehicle.component';

describe('UpdateDeleteVehicleComponent', () => {
  let component: UpdateDeleteVehicleComponent;
  let fixture: ComponentFixture<UpdateDeleteVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDeleteVehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeleteVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
