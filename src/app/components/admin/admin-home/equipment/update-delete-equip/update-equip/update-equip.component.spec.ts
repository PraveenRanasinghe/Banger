import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEquipComponent } from './update-equip.component';

describe('UpdateEquipComponent', () => {
  let component: UpdateEquipComponent;
  let fixture: ComponentFixture<UpdateEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEquipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
