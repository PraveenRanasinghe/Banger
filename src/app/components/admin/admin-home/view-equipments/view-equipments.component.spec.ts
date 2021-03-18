import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEquipmentsComponent } from './view-equipments.component';

describe('ViewEquipmentsComponent', () => {
  let component: ViewEquipmentsComponent;
  let fixture: ComponentFixture<ViewEquipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEquipmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEquipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
