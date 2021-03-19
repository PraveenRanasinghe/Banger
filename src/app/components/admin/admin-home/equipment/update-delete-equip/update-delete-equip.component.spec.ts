import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteEquipComponent } from './update-delete-equip.component';

describe('UpdateDeleteEquipComponent', () => {
  let component: UpdateDeleteEquipComponent;
  let fixture: ComponentFixture<UpdateDeleteEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDeleteEquipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeleteEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
